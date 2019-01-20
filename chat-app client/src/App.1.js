import React, { Component } from 'react';
import './App.css';
import Myheader from './components/Header/header'
import Welcome from './components/welcome/welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Myheader/>
        <Welcome />
      </div>
    );
  }
}

export default App;
