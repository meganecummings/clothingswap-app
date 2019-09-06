import React, { Component } from 'react';

// Internal Components
import { withRouter, Switch } from 'react-router-dom';
// import Home from './components/Home';
import Routes from './config/routes';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
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
          <NavBar logout={this.handleLogout} currentUser={this.state.currentUser} />
          <Routes setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} />
          {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(App);
