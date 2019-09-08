import React, { Component } from 'react';

// Internal Components
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import NavBar from './components/NavBar/NavBar';
// import Footer from './components/Footer/Footer';
import Event from './components/Events/Event';
import { API_URL } from './constants';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
      currentUser: localStorage.getItem('uid'),
      profile: null,
  };

  setCurrentUser = (userId) => {
    localStorage.setItem('uid', userId);
    this.setState({ currentUser: userId });
  };

  componentDidMount = () => {
    {this.state.currentUser && this.getUserInfo() }  
  }

  handleLogout = () => {
    localStorage.removeItem('uid');
    axios.post(`${API_URL}/auth/logout`, { withCrednetials: true })
        .then(() => {
          this.setState({ currentUser: null });
          this.props.history.push('/login');
        })
        .catch(error => console.log(error.response))
  };

  displayEvents = events => {
    return events.map(foundEvent => (
        <div className="your-events-container" key={foundEvent._id}>
            <Event event={foundEvent} displayPosts={this.displayPosts} />
        </div>
    ));
  };

  getUserInfo = () => {
    const userId = localStorage.getItem('uid');
    axios.get(`${API_URL}/users/${userId}`, { withCredentials: true })
        .then(response => this.setState({ profile: response.data }))
        .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
          <NavBar logout={this.handleLogout} currentUser={this.state.currentUser} />
          <Routes setCurrentUser={this.setCurrentUser} 
            currentUser={this.state.currentUser} 
            displayEvents={this.displayEvents} 
            profile={this.state.profile}
          />
          {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(App);
