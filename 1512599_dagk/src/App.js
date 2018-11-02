import React, { Component } from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Header} />
    </div>
  </Router>
)
export default App;
