import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Registration from './components/registration/Registration';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import UserPanel from './components/userPanel/UserPanel';
import AdminDashboard from './components/adminDashboard/AdminDashboard';
import AdminLogin from './components/adminLogin/AdminLogin';
import AdminRoute from './components/adminRoute/AdminRoute';

export const UserContext = createContext();
export const API_URL = 'http://localhost:4000';
function App() {
  const [adminLoggedin, setAdminLoggedIn] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser], [adminLoggedin, setAdminLoggedIn]}>

    <Router>
    <Header></Header>
    <ToastContainer />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/registration/:eventsId">
          <Registration></Registration>
        </PrivateRoute>
        
        <AdminRoute path="/adminDashboard">
          <AdminDashboard></AdminDashboard>
        </AdminRoute>
        
        <Route path="/adminlogin">
          <AdminLogin></AdminLogin>
        </Route>
        
        <PrivateRoute path="/userPanel">
          <UserPanel></UserPanel>
        </PrivateRoute>


      </Switch>
  </Router>


  </UserContext.Provider>
  );
}

export default App;
