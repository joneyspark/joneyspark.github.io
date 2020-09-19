import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
      </div>
      <Switch>
      <Route exact path="/">
          <Shop />
        </Route>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/product">
          <Product></Product>
        </Route>

      </Switch>
    </Router>
    
  );
}

export default App;
