import React, { useState, useEffect } from 'react';
import './App.css';

import New from './components/news/New';
import Header from './components/Header/Header';
import Topheadline from './components/Topheadline/Topheadline';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import About from './components/About/About';
import Home from './components/Home/Home';



function App() {
  const reChartdata = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

  var person1 = {
    fname: "Joney",
    lname: "Spark",
    position: "Web dev",
    Salary: "30k",
  }
  const products = [
    {name: 'Photoshop', price: '$90.00'},
    {name: 'Illustrator', price: '$80.00'},
    {name: 'PDF Reader', price: '$70.00'},
  ]

  const Heros = ["Salaman", "Sharuk", "Rrihitik", "Boby", "Sunny"]
  const Naiyoks = [
    {name:"Jasim",age:65},
    {name:"Alamgir",age:55},
    {name:"Rajib",age:50},
    {name:"Foridi",age:52},
    {name:"Salmansha",age:62},
  ]
  return (
    <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Root</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
    <div className="App container">
          	<LineChart width={600} height={300} data={reChartdata}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
      <Header></Header>
      <Topheadline></Topheadline>
      <header className="App-header">
      <New></New>

        <p>My First React App</p>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <div>
          <p><strong>Name:</strong>{person1.fname + " " + person1.lname}</p>
          <p><strong>Position:</strong>{person1.position}</p>
          <p><strong>Salary:</strong>{person1.Salary}</p>
        </div>
        {
          Naiyoks.map(nk => <Nayoks name={nk.name} age={nk.age}></Nayoks>)
        }
        <Person name="Joney" position="Web Dev"></Person>
        <Person name="Boney" position="Graphics"></Person>
        <Person name="Lucky" position="UX/UI"></Person>
        <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>
        <Counter></Counter>
        
        <ul>
          {
            Heros.map(hero => <li key={hero.name}>{hero}</li>)
          }
        </ul>
        <Users />
      </header>
    </div>
    </Router>
  );
}

function Notfound(){
  return(
    <h1>Not Found</h1>
  )
}

function Person(props){
  return (
    <div style={{border: '2px solid red', margin: '10px'}}>
      <h2>{props.name}</h2>
      <h2>{props.position}</h2>
    </div>
  )
}
function Nayoks(props) {
  return(
    <div style={{border: "2px solid red", background: "lightgray"}}>
      <h3>Name:{props.name}</h3>
      <h3>Age:{props.age}</h3>
    </div>
  )
}
function Products(props){
  const productStyle={
    width: '200px',
    height: '200px',
    backgroundColor: 'lightgray',
    border:'1px solid #ddd',
    borderRadius:'5px'
  }
  //const {name, price} = price.product;
  return(
  <div style={productStyle}>
    <strong>{props.product.name}</strong>
    <strong>{props.product.price}</strong>
  </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);

  }

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <Displouter clickCounterP={count}></Displouter>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect( () =>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => {
      setUsers(data);
      //console.log(data);
    })
  },[])

  return(
    <div>
      <ul>
        {
          users.map(user => <li key={user.id}>
            <p>Fullname: {user.name}</p>
            <p>Email: {user.email}</p>
            </li>)
        }
      </ul>
      <h2>Fullname: {users.name}</h2>
      <h3>Username: {users.username}</h3>
      <h3>Username: {users.email}</h3>
    </div>
  )
}

function Displouter(props){
return(
  <div>
    <h2>Display Couter : {props.clickCounterP}</h2>
  </div>
)
}


export default App;
