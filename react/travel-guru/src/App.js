import { Container, Typography } from '@material-ui/core';
import React, { createContext, useState } from 'react';
import './App.css';
import LocationItems from './components/LocationItems/LocationItems';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SingleLocation from './components/SingleLocation/SingleLocation';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import PlaceBooking from './components/PlaceBooking/PlaceBooking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LocationItems></LocationItems>
          </Route>
          <Route path="/location/:locationId">
            <SingleLocation></SingleLocation>
          </Route>
          <Route path="/booking/:locationId">
            <Booking></Booking>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path='/placebooking'>
            <PlaceBooking ></PlaceBooking>
          </PrivateRoute>
          <PrivateRoute path='/destination'>
            <Destination></Destination>
          </PrivateRoute>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

function Notfound(){
  return (
    <Container>
      <Typography variant="h1"> 
        404 Not Found
      </Typography>
    </Container>
  );
}

export default App;
