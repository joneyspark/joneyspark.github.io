import React, { useState }from 'react';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import OrderReview from './components/orderReview/OrderReview';
import Home from './components/Home/Home';

import * as firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCHVqPoojRZD11VGRELuVQAB9snCtlK1Lw",
  authDomain: "ema-jhon-simple-2cf2f.firebaseapp.com",
  databaseURL: "https://ema-jhon-simple-2cf2f.firebaseio.com",
  projectId: "ema-jhon-simple-2cf2f",
  storageBucket: "ema-jhon-simple-2cf2f.appspot.com",
  messagingSenderId: "706806171454",
  appId: "1:706806171454:web:55c154f8576e68d3064e6f",
  measurementId: "G-8GSJT8YGQ8"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const [users, setUsers] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password:'',
    photo:'',
    error:'',
    success: false,
  })
  const [newUser, setNewuser] = useState(false);
  const provider = new firebase.auth.GoogleAuthProvider();
    const handelSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const {displayName, photoURL, email} = res.user;
            const signedInUser = {
              isSignedIn: true,
              name: displayName,
              photo: photoURL,
              email: email
            }
            setUsers(signedInUser);

            console.log(displayName, photoURL, email);
        })
        .catch(error => {
            console.log(error);
            console.log(error.message);
        })
    }

    const handelSignOut = () => {
      firebase.auth().signOut()
      .then(res =>{
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          email:'',
          password:'',
          photo:''
        }
        setUsers(signedOutUser);
        console.log("Successfully signOut");
      })
      .catch(error =>{
        console.log(error);
      })
    }

  
    const handleInput = (e)=> {
      let isFieldValid = true;
      if (e.target.name === 'email'){
        const email = e.target.value;
        isFieldValid = /\S+@\S+\.\S+/.test(email);
      }
      if(e.target.name === 'password'){
        const password = e.target.value;
        const isValidPassword = password.length > 6;
        const isPasswordHasNumber = /\d{1}/.test(password);
        isFieldValid = isValidPassword && isPasswordHasNumber;
      }
      if(isFieldValid){
        const newUserInfo = {...users}
        newUserInfo[e.target.name] = e.target.value;
        setUsers(newUserInfo);
      }
    }

    const handleSubmit = (e) => {
      if(newUser && users.email && users.password){
        firebase.auth().createUserWithEmailAndPassword(users.email, users.password)
        .then(res =>{
          const newUserInfo = {...users};
          newUserInfo.success = true;
          newUserInfo.error = '';
          setUsers(newUserInfo);
          updateUserInfo(users.name);
        })
        .catch(error =>{
          // Handle Errors here.
          //var errorCode = error.code;
          const newUserInfo = {...users};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUsers(newUserInfo);
        });
      }

      if(!newUser && users.email && users.password){
        firebase.auth().signInWithEmailAndPassword(users.email, users.password)
        .then(res => {
          const newUserInfo = {...users};
          newUserInfo.success = true;
          newUserInfo.error = '';
          setUsers(newUserInfo);
          console.log("signed in user", res.user)
        })
        .catch(function(error) {
          const newUserInfo = {...users};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUsers(newUserInfo);
        });
      }

      e.preventDefault();
    }

    const updateUserInfo = name => {
      const user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: name,
        //photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(function() {
        console.log('Update successful');
      }).catch(function(error) {
        console.log(error);
      });
    }

  return (
    <div className="App">

      <Header></Header>

      {
        users.isSignedIn 
        ?
        <button className="btn btn-primary" onClick={handelSignOut}>Google Sign out</button>
        :
        <button className="btn btn-primary" onClick={handelSignIn}>Google Sign in</button>
      }

    {
      users.isSignedIn && <div>
        <p>Name: {users.name}</p>
        <p>Email: {users.email}</p>
        <img src={users.photo} alt="users" width="150"></img>
      </div>
    }
    <Container>
      <Row className="text-left">

        <Col md={{ span: 6, offset: 3 }}>
          
          <Form action="">
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="New User Sign up" onChange={() => setNewuser(!newUser)} />
            </Form.Group>
            {
              newUser && <Form.Group controlId="email">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" required onBlur={handleInput} placeholder="Enter Name" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            }
            
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" required onBlur={handleInput} placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" required onBlur={handleInput} placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit} type="submit">
              Submit
            </Button>

          </Form>
          <Form.Text className="text-muted">
            <b style={{color: "red"}}>{users.error}</b>
          </Form.Text>
          {
            users.success && 
              <Form.Text className="text-muted">
                <b style={{color: "green"}}>User {newUser ? "Created" : "Logged in"} Successfully</b>
              </Form.Text>
          }

        </Col>
      </Row>
    </Container>

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
