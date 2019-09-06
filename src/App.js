import React, { Component } from 'react';

// Internal Components
import { withRouter } from 'react-router-dom';
import { API_URL } from './constants';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default withRouter(App);
