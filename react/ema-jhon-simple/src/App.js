import React, { createContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Review from './components/Review/Review';
import Notfound from './components/Notfound/Notfound';
import Productdetail from './components/Productdetail/Productdetail';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageInventory from './components/ManageInventory/ManageInventory';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <Productdetail></Productdetail>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <PrivateRoute path="/manage-intentory">
            <ManageInventory></ManageInventory>
          </PrivateRoute>
          <Route path="*">
            <Notfound></Notfound>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}


export default App;
