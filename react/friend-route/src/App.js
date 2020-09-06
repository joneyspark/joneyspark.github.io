import React, { createContext } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './components/Home/Home';
import UserDetails from './components/Userdetail/UserDetails';
import { useState } from 'react';
export const Contextcategory = createContext();
function App() {
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }
  
  function Notfound() {
    return <h2>404 Not Found</h2>;
  }
  
  const [count, setCount] = useState(0);


  return (

    <Router>
      <Contextcategory.Provider>

    <h1>Counter: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Increase</button>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/home">
          <Home count={count}></Home>
        </Route>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/user">
          <Users />
        </Route>

        <Route path="/friend/:friendId">
          <UserDetails />
        </Route>

        <Route exact path="*">
          <Notfound />
        </Route>

      </Switch>
     
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/users">Dashboard</Link>
      </li>
    </ul>
    </Contextcategory.Provider>
    </Router>

  );
}

export default App;