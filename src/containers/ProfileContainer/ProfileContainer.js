import React, { Component } from 'react';
import axios from 'axios';

// Internal Components
import { API_URL } from '../../constants';
import Profile from '../../components/Profile/Profile';
import { Link } from 'react-router-dom';
import './ProfileContainer.css';

class ProfileContainer extends Component {
    state ={
        profile: null,
        posts: [],
        errors: null,
        events: [],
        items: []
    };

    handleDelete = event => {
        event.preventDefautl()
        console.log(event.target);
        this.deletePost();
    };

    componentDidMount() {
        this.getUserInfo();
        this.getEvents();
        this.getItems();
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.getUserInfo();
        };
    };

    getUserInfo = () => {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}`, { withCredentials: true })
            .then(response => this.setState({ profile: response.data }))
            .catch(error => console.log(error));
    };

    getItems  = () => {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}/items`, { withCredentials: true })
            .then(response => this.setState({ items: response.data }))
            .catch(error => console.log(error));
    };

    getEvents  = () => {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}/events`, { withCredentials: true })
            .then(response => this.setState({ events: response.data }))
            .catch(error => console.log(error));
    };

    getPosts  = () => {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}/posts`, { withCredentials: true })
            .then(response => this.setState({ items: response.data }))
            .catch(error => console.log(error));
    };

    displayItems = items => {
       return items.map(foundItem => (
            <div className="items" key={foundItem._id}>
                <Link to={`/items/${foundItem._id}`}>Check out this item</Link>
                <h4>{foundItem.title}</h4>
                <p>{foundItem.description}</p>
                <img src={foundItem.image} alt={`${foundItem.title}`} />
            </div>
        ));
    };

    displayErrors = errors => {
       return errors.map((error, index) => (
            <div className="alert" style={{ width:'100%' }} role="alert" key={index}>
                {error.message}
                <button type="button" className="close" data-dismiss="alert"><span>&times;</span></button>
            </div>
        ));
    };

    displayEvents = events => {
        return events.map(foundEvent => (
            <div className="event" key={foundEvent._id}>
                <Link to={`/events/${foundEvent._id}`}>Check out this Event</Link>
                <h4>{foundEvent.title}</h4>
                <p>{foundEvent.description}</p>
                <p>Event Date: {foundEvent.date}</p>
            </div>
        ));
    };

    render() {
        const { currentUser } = this.props;
        return (
            <div className="post-container">
                {this.state.errors && this.displayErrors(this.state.errors)};
                {this.state.profile && <Profile user={this.state.profile.data} events={this.state.events} items={this.state.items} errors={this.state.errors}/>}
                <div className="event-container">
                    <h2> Events You're Hosting </h2>
                    {this.state.events.length ? this.displayEvents(this.state.events) : <p> You Don't Have Any Events Yet. Add some Soon! </p>}
                </div>
                <div className="items-container">
                    <h2> Your Items </h2>
                    {this.state.items.length ? this.displayItems(this.state.items) : <p>You Don't Have Any Items Yet. Add some Soon! </p>}
                </div>
            </div>
        )
    }
};

export default ProfileContainer;