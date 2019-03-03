import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from './Home';
import Post from './Post';
import About from './About';

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/posts/:id" component={Post}/>
        <Route path="/about" component={About}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
};

export default Routers;
