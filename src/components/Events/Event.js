import React from 'react';
import { Link } from 'react-router-dom';

import Post from '../Post/Post';
import './Event.css'
import PostsContainer from '../../containers/PostsContainer/PostsContainer';

const Event = ({ event: { _id, title, description, location, date, startTime, posts, invitees, attendees, image}, displayPosts }) => {

    const eventDate = date && `${new Date(date).toLocaleDateString()} @ ${new Date(date).toLocaleTimeString()}`;


    return (
        <div className="Event-card" key={_id}>
            <div >
                <p><strong>{title}</strong></p>
            </div>
            <img src={image} alt={`${title}`} />
            <p>Where: {location}</p>
            <p>When: {eventDate}</p>
            <p>Start Time: {startTime}</p>
            <p>What it's all about: {description}</p>
            <p>Who's Invited: {invitees}</p>
            <p><Link to={`/events/${_id}`}> More Event Details </Link></p>
            <p>{posts.length && <PostsContainer posts={displayPosts(posts)} />}</p>
        </div>
    )
}

export default Event