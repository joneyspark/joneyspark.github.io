import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import PostDetail from './components/PostDetail/PostDetail';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/blog">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/post/:postDetail">
            <PostDetail></PostDetail>
          </Route>

          <Route path="*">
            <Notfound></Notfound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

function Notfound(){
  return(
    <Container>
      <h1> Page Not Found</h1>
    </Container>
  )
}
function Contact(){
  return(
    <Container>
      <h1> Contact Coming Soon</h1>
    </Container>
  )
}


export default App;
