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
                    <div className="border">
                        <p><strong>{event.title}</strong></p>
                    </div>
                    <img src={event.image} alt={`${event.title}`} />
                    <p>Where: {event.location}</p>
                    <p>When: {event.eventDate}</p>
                    <p>Start Time: {event.startTime}</p>
                    <p>What it's all about: {event.description}</p>
                    <p>Who's Invited: {event.invitees}</p>
                    <p><Link to={`/event/${event._id}`}> More Event Details </Link></p>
                    <p>{event.posts.length && <PostsContainer posts={displayPosts(posts)} />}</p>
                    <button onClick={event => {handleDelete(event,_id)}} >Delete</button>
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