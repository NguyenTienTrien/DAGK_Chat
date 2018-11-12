import React, { Component } from 'react';
import Login from './Components/Login';
import Users from './Users/loadUser';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/user" component={Users} />
    </div>
  </Router>
)

export default App;
