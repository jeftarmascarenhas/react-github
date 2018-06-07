import React, { Component } from 'react';
import { Link } from "react-router-dom";

import logo from '../../logo.svg';
import './Header.css';

class App extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Github Page With React</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>
    );
  }
}

export default App;
