import React from 'react';
import { Link } from 'react-router-dom';
// Internal comonents
import Post from '../Post/Post';
import ItemHeader from '../ItemHeader/ItemHeader';
// Styles
import './ItemPosts.css';

const ItemPosts = ({ currentUser, handleDelete, item: { itemName, image, description },  posts
    }) => {
    return (
        <div className="container">
            <ItemHeader name={itemName} image={image} description={description} />
            <div className="posts-header">
                <h2>Posts</h2>
                {currentUser &&
                    <Link to={`/posts/new`} className="post-btn">+</Link>
                }
            </div>
            {posts && <Post
                currentUser={currentUser}
                posts={posts}
                handleDelete={handleDelete}
            />}
        </div>

    );
};

export default ItemPosts;
