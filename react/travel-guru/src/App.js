import { Container, Typography } from '@material-ui/core';
import React, { createContext, useState } from 'react';
import './App.css';
import LocationItems from './components/LocationItems/LocationItems';
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import SingleLocation from './components/SingleLocation/SingleLocation';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import PlaceBooking from './components/PlaceBooking/PlaceBooking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';
import "leaflet/dist/leaflet.css";
// import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';
import 'react-toastify/dist/ReactToastify.css';

import { AnimatePresence, motion} from 'framer-motion';
import { ToastContainer } from 'react-toastify';

export const UserContext = createContext();

function App() {

  let location = useLocation();

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      
      
        <AnimatePresence exitBeforeEnter initial={false}>
        <ToastContainer />
          <Switch location={location}>
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
            <PrivateRoute path='/placebooking/:placeId'>
              <PlaceBooking ></PlaceBooking>
            </PrivateRoute>
            <Route path='/destination'>
              <Destination></Destination>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </AnimatePresence>
      
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
