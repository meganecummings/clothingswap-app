import React from 'react';

const Post = ({ title, description, content, authorUsername }) => {

    return (
        <div className="Post-card">
                <p><strong>{title}</strong></p>
                <p>Written By: {authorUsername}</p>
                <p>{description}</p>
                <p>{content}</p>
        </div>
    )
};

export default Post;