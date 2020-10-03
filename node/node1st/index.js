const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')

app.use(cors())
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Thank You very much Welcom to Node.js");
})


const users = ['Lucky', 'Boney', 'Joney', 'Nargis', 'Jui', 'Likhon', 'Shoma', 'Hussain'];

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query.sort);
    const name = users[id];
    res.send({id, name});
})

app.post('/addUser', (req, res)=>{
    const user = req.body
    user.id = 44;
    res.send(user);
    console.log("Data Received >>>", req.body);
})

app.listen(4000, () => console.log('Listeing to port 4000'));