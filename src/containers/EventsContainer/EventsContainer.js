import React from 'react';
import axios from 'axios';
const slugify = require('slugify');

// Internal Components
import { API_URL } from '../../constants';
import Events from '../../components/Events/Events';
import EventsPostsContainer from './EventsPostsContainers/EventsPostsContainers';
import { Link } from 'react-router-dom';
import './EventsContainer.css';

class EventsContainer extends Component {
    state = {
        events: null,
        userEvents: null,
        profile: null, 
        eventTitle: '',
        eventDescription: null,
        eventLocation: null,
        eventDate: null,
        eventStartTime: null,
        eventEndTime: null,
        eventCancelled: null,
        eventCancelled_at: null,
        eventSlug: null,
        eventImage: null, 
        eventInvitees: null
    };

    componentDidMount() {
        this.getUserInfo();
        this.getEvents();
    };

    // componentDidUpdate(prevProps, prevState) {

    // }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleDelete = (event, id) => {
        event.preventDefault();
        console.log(id);
        this.deleteEvent(event, id);
        this.getEvents();
    }

    getEvents = () => {
        axios.get(`${API_URL}/events`, { withCredentials: true })
            .then(response => this.setState({ events: response.data }))
            .catch(error => console.log(error));
    }; 

    getUserEvents = () => {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}/events`, { withCredentials: true })
            .then(response => this.setState({ userEvents: response.data }))
            .catch(error => console.log(error))
    }

    submitEvent = event => {
        event.preventDefault();
        const currentEvents = this.state.events;
        axios.post(`${API_URL}/events/new`, {
            hostUsername: this.state.profile.username,
            title: this.state.eventTitle,
            description: this.state.eventDescription,
            location: this.state.eventLocation,
            date: this.state.eventDate,
            startTime: this.state.eventStartTime,
            endTime: this.state.eventEndTime,
            slug: slugify(this.state.eventTitle),
            image: this.state.eventImage, 
            invitees: this.state.eventInvitees
        }, { withCredentials: true })
        .then(response => {
            currentEvents.push(response.data.data);
            this.setState({ events: currentEvents });
            this.getEvents();
            this.props.goBack();
        })
        .catch(error => console.log(error.response));
    };

    updateEvent = id => {
        const updatedEvent = this.state.events.filter(event => event._id !== id);
        this.setState({ events: updatedEvent });
    };

    deleteEvent = (event, id) => {
        event.preventDefault();
        console.log(id);
        axios.delete(`${API_URL}/events/${id}`)
            .then(response => {
                this.getEvents();
                this.updateEvents(id);
                this.props.goBack();
            })
            .catch(error => console.log(error.response));
    };

    getUserInfo = () => {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}`, { withCredentials: true })
            .then(response => this.setState({ profile: response.data }))
            .catch(error => console.log(error));
    };

    render() {
        return (
            <div className="events-container">
                {this.props.deleteEvent && 
                <div> 
                    <Link to="/events"> <button>Cancel</button> </Link>
                    <button onClick={this.deleteEvent}>Delete</button>
                </div>}
                
                <div className="events-posts">
                    <EventsPostsContainer events={this.state.events} />
                </div>
            </div>
        )
    }


};

export default EventsContainer;
