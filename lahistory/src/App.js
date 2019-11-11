import React, { Component } from 'react';
import './App.css';
import Footer   from './Footer.js';
import Header   from './Header.js';
import Timeline from './Timeline.js'


class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <Header />
        <Timeline />
        <Footer />
      </div>
    );
  }
}

export default App;