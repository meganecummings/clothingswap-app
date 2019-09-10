import React, { Component } from 'react';
import axios from 'axios';
import slugify from 'react-slugify';

// Internal Components
import { API_URL } from '../../constants';
import Event from '../../components/Events/Event';
import { Link } from 'react-router-dom';
import './EventsContainer.css';

class EventsContainer extends Component {
    state = {
        events: null,
        userEvents: null,
        title: '',
        description: '',
        location: '',
        date: '',
        startTime: '',
        endTime: '',
        cancelled: '',
        cancelledAt: '',
        slug: '',
        image: '', 
        invitees: '',
        email: {
            recipient: '',
            sender: '',
            subject: '',
            text: ''
          }
    };

    componentDidMount() {
        if (this.props.eventID) this.getEvent();
        else {
        this.getEvents();
        }
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleEdit = event => {
        event.preventDefault();
    };

    getEvent = () => {
        axios.get(`${API_URL}/events/${this.props.eventID}`, { withCredentials: true })
            .then(response => { 
                console.log(response.data)
                this.setState({ events: [response.data.data] })})
            .catch(error => console.log(error));
    }; 

    getEvents = () => {
        axios.get(`${API_URL}/events`, { withCredentials: true })
            .then(response => this.setState({ events: response.data.data }))
            .catch(error => console.log(error));
    }; 

    getUserEvents = () => {
        const userId = this.props.currentUser
        axios.get(`${API_URL}/users/${userId}/events`, { withCredentials: true })
            .then(response => this.setState({ userEvents: response.data.data }))
            .catch(error => console.log(error))
    };

    submitEvent = event => {
        event.preventDefault();
        const currentEvents = this.state.events;
        axios.post(`${API_URL}/events/new`, {
            hostUsername: this.props.profile.data.username,
            title: this.state.title,
            description: this.state.description,
            location: this.state.location,
            date: this.state.date,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            slug: slugify(this.state.title),
            image: this.state.image, 
            invitees: this.state.invitees,
            attendees: this.props.profile.data._id
        }, { withCredentials: true })
        .then(response => {
            console.log(response.data)
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

    displayEvents = events => {
        return events.map(foundEvent => (
            <div className="your-events-container" key={foundEvent._id}>
                <Event event={foundEvent} handleEventDelete={this.props.handleEventDelete} displayPosts={this.displayPosts} />
            </div>
        ));
    };

    displayInvite() {
        const { email } = this.state;
        const spacer = { margin: 10 }
        const textArea = { borderRadius: 4 }
        return (
            <div className="add-event">
                <button className="exit-form" onClick={() => this.props.goBack()} >x</button>
                <div style={{ marginTop: 10 }} >
                <h2> Send Email </h2>
                <label> Recipient's Email Address </label>
                <br />
                <input value={email.recipient} type='email'
                    onChange={e => this.setState({ email: { ...email, recipient: e.target.value } })} />
                <div style={spacer} />
                <label> Sender's Email Address </label>
                <br />
                <input value={email.sender} type='email'
                    onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} />
                <div style={spacer} />
                <label> Subject of Your Email </label>
                <br />
                <input value={email.subject} placeholder='Come to my Event!'
                    onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                <div style={spacer} />
                <label> Message </label>
                <br />
                <textarea rows={3} value={email.text} style={textArea}
                    onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
                <div style={spacer} />
                <button onClick={this.sendEmail}> Send Email </button>
                </div>
            </div>
        )     
    };

    sendEmail = () => {
        const { email } = this.state;
            axios.get(`${API_URL}/send_invites?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`, { withCredentials:true })
                .then(response => console.log(response))
                .catch(err => console.error(err))    
      };

    // Cited Reference: https://github.com/Solomon04/Sendgrid-Express/blob/master/src/App.js

    render() {

        return (
            <div className="events-container">
                {this.props.deleteEvent && 
                    <div> 
                        <Link to="/events"> <button>Cancel</button> </Link>
                        <button onClick={this.deleteEvent}>Delete</button>
                    </div>}

                <div className="events">
                    <h2> Events 
                    {this.state.events ? <Link to={`/events/new`} > Add New Event</Link> : null }
                    {this.state.events ? <Link to={`/events/send-invite`} >Invite People to Your Event </Link> : null}
                    </h2>
                    {this.state.events ? this.displayEvents(this.state.events) : <p> You Don't Have Any Events Yet. Add some Soon! </p>}
                </div>
                {this.props.sendInvites && this.displayInvite()}        

                {this.props.addEvent && 
                    <div className="add-event">
                        <button className="exit-form" onClick={() => this.props.goBack()} >x</button>
                        <h1>Your New Event</h1>
                        <form action="https://formspree.io/megcummings@gmail.com" method="POST">
                            <label>Title of the Event</label>
                            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                            <label>Description</label>
                            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                            <label>Location</label>
                            <input type="text" name="location" value={this.state.
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
