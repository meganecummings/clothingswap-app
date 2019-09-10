import React, { Component } from 'react';

// Internal Components
import { withRouter, Link } from 'react-router-dom';
import Routes from './config/routes';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Event from './components/Events/Event';
import Post from './components/Post/Post';
import { API_URL } from './constants';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
      currentUser: localStorage.getItem('uid'),
      profile: null,
      events: null,
      items: null
  };

  setCurrentUser = (userId) => {
    localStorage.setItem('uid', userId);
    this.setState({ currentUser: userId });
  };

  componentDidMount = () => {
    this.getUserInfo(); 
    this.getItems();
    this.getEvents();
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

  displayEvents = events => {
    return events.map(foundEvent => (
        <div className="your-events-container" key={foundEvent._id}>
            <Event event={foundEvent} displayPosts={this.displayPosts} />
        </div>
    ));
  };


  displayPosts = posts => {
    return posts.map(post => {
        return(
            <div className="your-posts-container" key={post._id}> 
                <Link to={`/posts/${post._id}`} ></Link>
                <Post title={post.title} authorUsername={post.authorUsername} description={post.description} content={post.content} />
            </div>
        )
    });
}

  getUserInfo = () => {
    const userId = localStorage.getItem('uid');
    axios.get(`${API_URL}/users/${userId}`, { withCredentials: true })
        .then(response => this.setState({ profile: response.data }))
        .catch(error => console.log(error));
  };


  getEvents  = () => {
    const userId = localStorage.getItem('uid');
    axios.get(`${API_URL}/users/${userId}/events`, { withCredentials: true })
        .then(response => this.setState({ events: response.data }))
        .catch(error => console.log(error));
  };

  getItems = () => {
    axios.get(`${API_URL}/items`)
        .then(response => {
            this.setState({ items: response.data })
        })
        .catch(error => console.log(error))
  };

  handleEventDelete = (event, id) => {
    event.preventDefault();
    console.log(id);
    this.deleteEvent(event, id);
    this.getEvents();
  };

  updateEvents = id => {
    const updatedEvent = this.state.events.filter(event => event._id !== id);
    this.setState({ events: updatedEvent });
};

  deleteEvent = (event, id) => {
    event.preventDefault();
    console.log(id);
    axios.delete(`${API_URL}/events/${id}/delete`)
        .then(response => {
            this.getEvents();
            this.updateEvents(id);
            this.props.goBack();
        })
        .catch(error => console.log(error.response));
};

  render() {
    return (
      <div className="App">
          <NavBar logout={this.handleLogout} currentUser={this.state.currentUser} />
          <Routes setCurrentUser={this.setCurrentUser} 
            currentUser={this.state.currentUser} 
            displayEvents={this.displayEvents} 
            getUserInfo={this.getUserInfo}
            displayPosts={this.displayPosts}
            profile={this.state.profile}
            handleEventDelete={this.handleEventDelete}
            events={this.state.events}
            items={this.state.items}
          />
          <Footer />
      </div>
    );
  }
}

export default withRouter(App);
