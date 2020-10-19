const express = require('express');

const cors = require('cors');
const fs = require('fs-extra')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('doctors'));
app.use(fileUpload());

const admin = require('firebase-admin');
const serviceAccount = require('./config/creative-agencyyy-firebase-adminsdk-kmooa-0173371ada.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://creative-agencyyy.firebaseio.com"
});

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.po85n.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const Orderscollection = client.db(process.env.DB_NAME).collection("Orders");
  const ServicesCollection = client.db(process.env.DB_NAME).collection("Services");
  const ReviewCollection = client.db(process.env.DB_NAME).collection("Reviews");
  const UsersCollection = client.db(process.env.DB_NAME).collection("Users");
  
  app.post('/addOrder', (req, res) => {
      const file = req.files.file;
      const name = req.body.name;
      const email = req.body.email;
      const service = req.body.service;
      const projectdetails = req.body.projectdetails;
      const price = req.body.price;
      const status = 0;

      console.log(name, email, service, projectdetails, price);

      const filePath = `${__dirname}/doctors/${file.name}`;

      file.mv(filePath, err => {
          if (err) {
              console.log(err);
              return res.status(500).send({msg:'Failed to upload'});
          }

          const newImg = fs.readFileSync(filePath);

          const encImg = newImg.toString('base64');
          
          var image = {
            contentType: req.files.file.mimetype,
            size: Number(req.files.file.size),
            img: Buffer.from(encImg, 'base64'),
          };

          Orderscollection.insertOne({name, email, service, projectdetails, price, image, status})
          .then(result => {
            fs.remove(filePath, error => {
              if(error){
                console.log(error);
              }
              res.send(result.insertedCount > 0)
            })
          })


        })
    // return res.send({name: file.name, path: `/${file.name}`})
    
  })

  
  app.post('/addService', (req, res) => {
      const file = req.files.file;
      const service = req.body.service;
      const serviceDetail = req.body.serviceDetail;

      console.log(service, serviceDetail);

      const filePath = `${__dirname}/doctors/${file.name}`;

      file.mv(filePath, err => {
          if (err) {
              console.log(err);
              return res.status(500).send({msg:'Failed to upload'});
          }

          const newImg = fs.readFileSync(filePath);

          const encImg = newImg.toString('base64');
          
          var image = {
            contentType: req.files.file.mimetype,
            size: Number(req.files.file.size),
            img: Buffer.from(encImg, 'base64'),
          };

          ServicesCollection.insertOne({service, serviceDetail, image})
          .then(result => {
            fs.remove(filePath, error => {
              if(error){
                console.log(error);
              }
              res.send(result.insertedCount > 0)
            })
          })


        })
    // return res.send({name: file.name, path: `/${file.name}`})
    
  });

  
  app.post('/addReview', (req, res) => {
      const file = req.files.file;
      const clientName = req.body.clientName;
      const designation = req.body.designation;
      const reivewDesc = req.body.reivewDesc;
      const email = req.body.email;

      const filePath = `${__dirname}/doctors/${file.name}`;

      file.mv(filePath, err => {
          if (err) {
              console.log(err);
              return res.status(500).send({msg:'Failed to upload'});
          }

          const newImg = fs.readFileSync(filePath);

          const encImg = newImg.toString('base64');
          
          var image = {
            contentType: req.files.file.mimetype,
            size: Number(req.files.file.size),
            img: Buffer.from(encImg, 'base64'),
          };

          ReviewCollection.insertOne({clientName, designation, reivewDesc, email, image})
          .then(result => {
            fs.remove(filePath, error => {
              if(error){
                console.log(error);
              }
              res.send(result.insertedCount > 0)
            })
          })
        })
    // return res.send({name: file.name, path: `/${file.name}`})
    
  });



  app.get('/getServices', (req, res) => {
    ServicesCollection.find({})
      .toArray((error, documents) => {
          res.send(documents);
      })
  });


  app.get('/getReviews', (req, res) => {
    ReviewCollection.find({})
      .toArray((error, documents) => {
          res.send(documents);
      })
  });


  app.get('/orderlists', (req, res) => {
    const bearer = req.headers.authorization;
    if(bearer && bearer.startsWith('Bearer ')){
        const idToken = bearer.split(' ')[1];
        console.log({idToken});
        // idToken comes from the client app
          admin.auth().verifyIdToken(idToken)
          .then(function(decodedToken) {
          const tokenEmail = decodedToken.email;
          const queryEmail = req.query.email;
          console.log(tokenEmail, queryEmail);
          if(tokenEmail === queryEmail){
            Orderscollection.find({email: req.query.email})
              .toArray((err, documents) => {
                  res.send(documents);
              })
          }else{
              res.status(401).send("unauthorized access");
          }
          }).catch(function(error) {
              res.status(401).send("unauthorized access");
          });
    }else{
      res.status(401).send("unauthorized access");
    }
})

  app.get('/getAdmin', (req, res) => {
    const bearer = req.headers.authorization;
    if(bearer && bearer.startsWith('Bearer ')){
        const idToken = bearer.split(' ')[1];
        console.log({idToken});
        // idToken comes from the client app
          admin.auth().verifyIdToken(idToken)
          .then(function(decodedToken) {
          const tokenEmail = decodedToken.email;
          const queryEmail = req.query.email;
          console.log(tokenEmail, queryEmail);
          if(tokenEmail === queryEmail){
            UsersCollection.find({email: req.query.email, role: 'Admin'})
              .toArray((err, documents) => {
                  res.send(documents);
              })
          }else{
              res.status(401).send("unauthorized access");
          }
          }).catch(function(error) {
              res.status(401).send("unauthorized access");
          });
    }else{
      res.status(401).send("unauthorized access");
    }
})



app.get('/getAdminServiceLists', (req, res) => {
  Orderscollection.find({})
    .toArray((error, documents) => {
        res.send(documents);
    })
});


console.log("Database Connected");
 // client.close();
});





app.get('/', (req, res)=>{
    res.send("Hello World");
})

app.listen(process.env.PORT, ()=>console.log("Port is Listening 4000"));