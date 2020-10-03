const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require("firebase-admin");

require('dotenv').config();


const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.po85n.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;




var serviceAccount = require("./config/ema-jhon-simple-2cf2f-firebase-adminsdk-gsmhz-4831f54770.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIRE_DB
});


const app = express();
app.use(cors());
app.use(bodyParser.json());


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const productsCollection = client.db(process.env.DB_NAME).collection("products");
  const ordersCollection = client.db(process.env.DB_NAME).collection("orders");

  app.post('/addProduct', (req, res) => {
      const product = req.body;
      productsCollection.insertMany(product)
      .then(result => {
          console.log(result.insertedCount);
          res.send(result.insertedCount);
      })
  })

  app.get('/getProduct', (req, res) => {
      productsCollection.find({})
      .toArray((err, documents)=>{
          res.send(documents);
      })
  })

  
  app.get('/product/:key', (req, res) => {
      productsCollection.find({key: req.params.key})
      .toArray((err, documents)=>{
          res.send(documents[0]);
      })
  })

  app.post('/productsByKeys', (req, res) => {
    const productKeys = req.body;
    productsCollection.find({key: {$in: productKeys} })
    .toArray( (err, documents) => {
        res.send(documents);
    })
})

app.post('/addOrder', (req, res) => {
    const order = req.body;
    ordersCollection.insertOne(order)
    .then(result => {
        res.send(result.insertedCount > 0);
    })
})


  console.log("Database ema-jhon Connected Successfully")
  
  //client.close();
});


app.get('/', (req, res)=>{
    res.send("Hello World");
})

app.listen(4000, () => console.log("Port Is Listening 4000"));