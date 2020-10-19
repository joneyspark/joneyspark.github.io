import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Order from './Components/Dashboard/Order/Order';
import AddService from './Components/Dashboard/Admin/AddService/AddService';
import 'react-notifications/lib/notifications.css';
import Review from './Components/Dashboard/Review/Review';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import AdminServiceList from './Components/Dashboard/Admin/AdminServiceList/AdminServiceList';
export const API_URL = 'http://localhost:4000';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard/order/:id">
              <Order></Order>
            </PrivateRoute>
            
            <PrivateRoute path="/dashboard/review">
              <Review></Review>
            </PrivateRoute>

            <PrivateRoute path="/dashboard/servicelist">
              <ServiceList></ServiceList>
            </PrivateRoute>

            <PrivateRoute path="/dashboard/admin/addService">
              <AddService></AddService>
            </PrivateRoute>
            
            <PrivateRoute path="/dashboard/admin/adminServiceLists">
              <AdminServiceList></AdminServiceList>
            </PrivateRoute>

          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
