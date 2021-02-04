import React, { Component } from 'react';
import './App.css';
import Footer   from './Footer.js';
import Header   from './Header.js';
import CarMakeModelSelect from './CarMakeModelSelect.js'


class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <Header />
        <CarMakeModelSelect />
        <Footer />
      </div>
    );
  }
}

export default App;