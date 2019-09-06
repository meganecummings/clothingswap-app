import React, { Component } from 'react';

// Internal Components
import { withRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Routes from './config/routes';
import NavBar from './components/NavBar/NavBar';
import { API_URL } from './constants';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
      currentUser: localStorage.getItem('uid')
  };

  setCurrentUser = (userId) => {
    localStorage.setItem('uid', userId);
    this.setState({ currentUser: userId });
  };

  handleLogout = () => {
    localStorage.removeItem('uid');
    axios.post(`${API_URL}/auth/logout`, { withCrednetials: true })
        .then(() => {
          this.setState({ currentUser: null });
          this.props.history.push('/login');
        })
        .catch(error => console.log(error.response))
  };



  render() {
    return (
      <div className="App">
        <Switch>
          <NavBar logout={this.handleLogout} currentUser={this.state.currentUser} />
          <Routes setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
