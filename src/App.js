import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SheetJSApp from './mannir/mannirexcel'
import * as pdf from './mannir/mannirpdf'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mannir eSystems Limited</h1>
        </header>
        <p className="App-intro">
          
        <SheetJSApp />

        </p>
      </div>
    );
  }
}

export default App;
