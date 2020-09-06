import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import OrderReview from './components/orderReview/OrderReview';
import { Container } from 'react-bootstrap';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">

      <Header></Header>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          
          <Route path="/home">
            <Home></Home>
          </Route>
          
          <Route path="/order-review">
            <OrderReview></OrderReview>
          </Route>

          <Route path="*">
            <Notfound />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

function Notfound(){
  return(
    <>
      <Container>
        <h1>Page Not Found 404</h1>
      </Container>
    </>
  )
}

export default App;
