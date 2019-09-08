import React from 'react';
import { Link } from 'react-router-dom';

import Post from '../Post/Post';
import './Event.css'
import PostsContainer from '../../containers/PostsContainer/PostsContainer';

const Event = ({ title, description, location, date, startTime, posts, invitees, slug, items, attendees, image }) => {

 
    const postsArr = posts.map(post => {
        return(
            <Link key={post._id} to={`/posts/${post._id}`} >
                <Post key={post._id} title={post.title} authorUsername={post.authorUsername} description={post.description} content={post.content} />
            </Link>
        )
    });

    return (
        <div className="Event-card">
            <div >
                <p><strong>{title}</strong></p>
            </div>
            <img src={image} alt={`${title}`} />
            <p>Where: {location}</p>
            <p>When: {date}</p>
            <p>Start Time: {startTime}</p>
            <p>What it's all about: {description}</p>
            <p>Who's confirmed: {attendees}</p>
            <p>Who's Invited: {invitees}</p>
            {posts.length && <PostsContainer posts={postsArr} />}
        </div>
    )
}

export default Event