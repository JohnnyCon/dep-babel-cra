import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const makeCall = async () => {
  console.log('making call')

  const options = {
    headers     : {
      'Accept'      : 'application/json',
      'Content-Type': 'application/json',
    }
  }

  const url      = "/api"
  const response = await fetch(url, options)
  const json     = await response.json()

  console.log('json', json)
}

class App extends Component {
  render() {
    makeCall()

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the beginning</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
