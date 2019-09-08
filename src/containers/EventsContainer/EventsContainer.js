import React, { Component } from 'react';
import axios from 'axios';
import slugify from 'react-slugify';

// Internal Components
import { API_URL } from '../../constants';
import Events from '../../components/Events/Events';
import { Link } from 'react-router-dom';
import './EventsContainer.css';

class EventsContainer extends Component {
    state = {
        events: [],
        userEvents: null,
        profile: null, 
        title: '',
        description: null,
        location: null,
        date: null,
        startTime: null,
        endTime: null,
        cancelled: null,
        cancelledAt: null,
        slug: null,
        image: null, 
        invitees: null
    };

    componentDidMount() {
        this.getUserInfo();
        this.getEvents();
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleEdit = event => {
        event.preventDefault();
    }

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
            title: this.state.title,
            description: this.state.description,
            location: this.state.location,
            date: this.state.date,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            slug: slugify(this.state.title),
            image: this.state.image, 
            invitees: this.state.invitees
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
                <div className="events-container">
                    {this.state.events.length ? 
                    <Events events={this.state.events} handleDelete={this.handleDelete} handleEdit={this.handleEdit} /> : <p> No Events Yet! Stay Tuned. </p>
                    }
                </div>
                {this.props.addEvent && 
                    <div className="add-event">
                        <Link onClick={() => this.props.goBack()}>Add Event</Link>
                        <form >
                            <label>Title of the Event</label>
                            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                            <label>Description</label>
                            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                            <label>Location</label>
                            <input type="text" name="
                            location" value={this.state.
                            location} onChange={this.handleChange} />
                            <label>Date</label>
                            <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
                            <label>Start Time</label>
                            <input type="text" name="startTime" value={this.state.startTime} onChange={this.handleChange} />
                            <label>Invitees</label>
                            <input type="text" name="invitees" value={this.state.invitees} onChange={this.handleChange} />
                            <label>URL for Image for Event</label>
                            <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
                            <button onClick={this.submitEvent}>Submit</button>
                        </form>
                    </div> }    
            </div>
        )
    }
};

export default EventsContainer;
