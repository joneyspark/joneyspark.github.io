import React, { useState, useContext }from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';

import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { handelSignOut, handelGoogleSignIn, firebaseInitializeFramework, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';


firebaseInitializeFramework();

function Login() {

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

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

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

    const handleResponse = (res, redirect) => {
          setUsers(res);
          setLoggedInUser(res);
          if(redirect){
            history.replace(from);
          }
    }

    const googleSignIn = () => {
      handelGoogleSignIn()
      .then(res => {
        handleResponse(res, true)
      })
    }
    const signOut = () => {
      handelSignOut()
      .then(res => {
        handleResponse(res, false)
      })
    }


    const handleSubmit = (e) => {
      if(newUser && users.email && users.password){
        createUserWithEmailAndPassword(users.name, users.email, users.password)
        .then(res => {
          handleResponse(res, true)
        })
      }

      if(!newUser && users.email && users.password){
        signInWithEmailAndPassword(users.email, users.password)
        .then(res => {
          handleResponse(res, true)
        })
      }

      e.preventDefault();
    }

   

    console.log("Logged in email", loggedInUser.email);
  return (
    <div>
      
    <Container>
    {
      users.isSignedIn && <div>
        <p>Name: {users.name}</p>
        <p>Email: {users.email}</p>
        <img src={users.photo} alt="users" width="150"></img>
      </div>
    }
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
            {
                users.isSignedIn 
                ?
                <button className="btn btn-primary ml-2" onClick={signOut}>Google Sign out</button>
                :
                <button className="btn btn-primary ml-2" onClick={googleSignIn}>Google Sign in</button>
            }

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

export default Login;
