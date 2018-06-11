import React from 'react';
import { Switch, Route } from "react-router-dom";

import EventsPage from '../../containers/events/EventsPage';
import AboutPage from '../../containers/about/AboutPage';

const Sidebar = () => (
  <Switch>
    <Route exact path="/" component={EventsPage} />
    <Route exact path="/about" component={AboutPage} />
  </Switch>
);

export default Sidebar;