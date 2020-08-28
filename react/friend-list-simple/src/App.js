import React, { useState } from 'react';
import './App.css';
import fakeData from './fakedata/data/randomuser.json';
import User from './components/user/User';
import Cart from './components/cart/Cart';
function App() {
  //console.log(fakeData);
  const first20 = fakeData.slice(0, 20);
  const [users, setUsers] = useState(first20);
  
  const [cart, setCart] = useState([]);

  const handleFriend = (user) => {
    const newCart = [...cart, user];
    setCart(newCart);
  }

  return (
    <div className="App">
      <Cart cart={cart}></Cart>
      <h1>{users.length}</h1>
      {
        users.map(user => <User user={user} key={user.username} handleFriend={handleFriend}></User>)
      }
      
    </div>
  );
}

export default App;
