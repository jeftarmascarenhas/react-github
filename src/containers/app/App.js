import React, { Component } from 'react';

import Header from '../../components/header/Header';
import Sidebar from '../../components/common/Sidebar';

class App extends Component {
  render() {
    return (
      <section className="App">
        <Header />
        <Sidebar />
      </section>
    );
  }
}

export default App;
