import React, {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Contact from "./Contact"
import "./App.css";
import {
  Box,
  Card,
  Image,
  Heading,
  Text,
  Flex,
} from 'rebass';

const githubDest = "https://github.com/aoponcedeleon";
const twitterDest = 'https://twitter.com/allenponsiii';
const facebookDest = 'https://www.facebook.com/allen.p.deleon/';


function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/portfolio_site" component={Profile}></Route>
          </Switch>  
        </div>



        <div className="footer" style={{backgroundColor:'#333333'}}>
            <Flex className="all-center" p={4}> 
            <div className="text-center" >
              <a href={githubDest} ><i className="fab fa-github p" /></a>
              <a href={twitterDest} ><i className="fab fa-twitter p" /></a>
              <a href={facebookDest} ><i className="fab fa-facebook-f p" /></a>
            </div>
            <Text color="#f4f4f4" style={{fontSize: 13}}> (c) Copyright 2019 Allen O. Ponce de Leon </Text>  
            <Text color="#f4f4f4" style={{fontSize: 13}}> E-mail me at aoponcedeleon@up.edu.ph for any inquiries or questions!</Text>   
            </Flex>    
              
          </div> 
      </Router>
    </Fragment>
  );
}

export default App;
