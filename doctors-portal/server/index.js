const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.po85n.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


client.connect(err => {
  const appointmentCollection = client.db(process.env.DB_NAME).collection("appointment");


app.post('/addAppointment', (req, res) => {
    const appointment = req.body;
    appointmentCollection.insertOne(appointment)
        .then(result => {
            res.send(result.insertedCount > 0)
        })
});

  app.post("/appointmentsByDate", (req, res) => {
    const date = req.body;
    console.log(date.date);
    if(date){
        appointmentCollection.find({date: date.date})
        .toArray((err, documents => {
            res.send(documents);
        }))
    }
    else{
        res.send("No Date Here...");
    }
});

app.post('/appointmentsByDate', (req, res) => {
    const date = req.body;
    const filter = { date: date.date }
    console.log( filter );
        /* appointmentCollection.find(filter)
            .toArray((err, documents) => {
                console.log( date.date, documents)
                res.send(documents);
            }) */
    })

});


app.get('/', (req, res) => {
    res.send("hello from db it's working working")
})

app.listen(4000, () => console.log("Port Listen 4000"));