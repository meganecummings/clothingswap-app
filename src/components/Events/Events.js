import React from 'react';
import { Link } from 'react-router-dom';

// Internal Components
import Event from './Event';

import './Events.css';

const Events = ({ events, currentUser, handleDelete, displayEventsPosts }) => {
    console.log(events)
    const eventsArr = events.data.map(event => {
        return(
            <Link key={event._id} to={`/events/${event._id}`} >
                <Event key={event._id} title={event.title} hostUsername={event.hostUsername} description={event.description} location={event.location} date={event.date} startTime={event.startTime} posts={event.posts} invitees={event.invitees} slug={event.slug} items={event.items} attendees={event.attendees} image={event.image}/>
            </Link>
        )
    });
    
    return (
        <div className="events-page">
            <div className="event-header">Events</div>
            <div className="events">{eventsArr}</div>
        </div>
    )
}

export default Events;