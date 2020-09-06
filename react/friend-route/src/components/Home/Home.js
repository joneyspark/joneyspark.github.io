import React, { useState, useEffect } from 'react';
import User from '../User/User';

const Home = (props) => {

    const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(data => {
      setUsers(data);
      console.log(data);
    })
  }, []);
    return (
        <div>
            <h1>Home Counter: {props.count}</h1>
            <h1 align="center">Total User: {users.length}</h1>
            <div className="user-container">
            {
                users.map(user => <User user={user} key={user.id}></User>)
            }
            </div>
        </div>
    );
};

export default Home;