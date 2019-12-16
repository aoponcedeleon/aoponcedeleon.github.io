import React, {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Profile from "./Profile"
import "./App.css";
import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass';


function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Profile}></Route>
            {/* <Route exact path="/contact" component={Contact}></Route>   */}
          </Switch>  
        </div> 
      </Router>
    </Fragment>
  );
}

export default App;
