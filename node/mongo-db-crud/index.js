const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const password = 'LjS53HkXVfBXnqw';
const uri = "mongodb+srv://dbUser:LjS53HkXVfBXnqw@cluster0.po85n.mongodb.net/firstMongoDb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


client.connect(err => {
  const collection = client.db("firstMongoDb").collection("firstMongoCollection");
  app.post("/addProduct", (req, res) => {
      const product = req.body;
      collection.insertOne(product);
      res.redirect('/');
  })
  app.get('/products', (req, res) =>{
      collection.find({})
      .toArray((error, documents) => {
          res.send(documents);
      })
  })
  
  app.delete('/delete/:id', (req, res) => {
      collection.deleteOne({_id: ObjectId(req.params.id)})
      .then( result => {
          res.send(result.deletedCount > 0);
      })
  })

  app.get('/single/:id', (req, res) => {
      collection.find({_id: ObjectId(req.params.id)})
      .toArray( (err, documents) => {
          res.send(documents[0]);
      })
  })

  app.patch('/update/:id', (req, res) => {
      console.log("from backend >>>", req.body.price);
      collection.updateOne({_id: ObjectId(req.params.id)}, {
          $set: { name: req.body.name, qty: req.body.qty, price: req.body.price }
      })
      .then( result => {
          res.send(result.modifiedCount > 0);
      })
  })
 
  console.log("Database Connected");

});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(4000, () => console.log("Port Listen 4000"));