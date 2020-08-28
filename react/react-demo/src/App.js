import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

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
    <div className="App">
      <header className="App-header">
        <p>My First React App</p>
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
            Heros.map(hero => <li>{hero}</li>)
          }
        </ul>
        <Users />
      </header>
    </div>
  );
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
      console.log(data);
    })
  },[])

  return(
    <div>
      <ul>
        {
          users.map(user => <li>
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
