const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');

require('dotenv').config()

const app = express();
app.use(cors());
app.use(bodyParser.json());


const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.po85n.mongodb.net/burjAlArab?retryWrites=true&w=majority`;

var serviceAccount = require("./config/burj-al-arab-ed7d5-firebase-adminsdk-6wo3q-7b3422f1b7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIRE_DB
});


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("burjAlArab").collection("booking");
  
  app.post('/addBooking', (req, res) => {
    const newBooking = req.body;
    collection.insertOne(newBooking)
    .then(result => {
      res.send(result.insertedCount > 0)
    })
  })

  app.get('/getBooking', (req, res) => {
    const bearer = req.headers.authorization;
    if(bearer && bearer.startsWith('Bearer ')){
      const idToken = bearer.split(' ')[1];
      console.log({idToken});
      
      admin.auth().verifyIdToken(idToken)
      .then(function(decodedToken) {
        const tokenEmail = decodedToken.email;
        const queryEmail = req.query.email;
        console.log(tokenEmail, queryEmail);
        if(tokenEmail == queryEmail){
          collection.find({email: req.query.email})
          .toArray((err, documents) => {
            res.send(documents);
          })
        }else{
          res.status(401).send("unauthorized access");
        }
      }).catch(function(error) {
          res.status(401).send("unauthorized access");
      });
    }
    else{
      res.status(401).send("unauthorized access");
    }
  })
  
  console.log('Db Connection Sucessfully');


  //client.close();
});


app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(4000, () => "Listening Port is : 4000");