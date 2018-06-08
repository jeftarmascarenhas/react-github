import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Header from '../../components/header/Header';
import EventsPage from '../events/EventsPage';
import AboutPage from '../about/AboutPage';

class App extends Component {
  render() {
    return (
      <section className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={EventsPage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </section>
    );
  }
}

export default App;
