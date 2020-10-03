import React from 'react';
import FoodMenu from './components/FoodMenu/FoodMenu';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SingleItem from './components/SingleItem/SingleItem';
import DrawerBox from './components/Drawer/DrawerBox';


function App() {

  return (
    <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <FoodMenu></FoodMenu>
          </Route>
          <Route path="/menuitem/:foodId">
            <SingleItem></SingleItem>
          </Route>
          <Route path="/drawer">
            <DrawerBox></DrawerBox>
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
    </Router>

  );
}


function Notfound() {
  return(
    <h1>Notfound</h1>
  )
}

export default App;
