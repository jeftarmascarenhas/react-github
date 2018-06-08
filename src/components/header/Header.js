import React, { Component } from 'react';
import { Link } from "react-router-dom";

import logo from '../../images/logo.svg';
import './Header.css';

class App extends Component {
  render() {
    return (
      <header className="events-header">
        <div className="row">
          <div className="col-xs-4">
            <img src={logo} className="events-header__logo" alt="logo" />
          </div>
          <div className="col-xs-8">
            <div className="row end-xs">
              <div className="col-xs-12 events-header__menu">
                <nav className="events-header__nav">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                  </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default App;
