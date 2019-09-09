import React from 'react';
import './Item.css'
import PostsContainer from '../../containers/PostsContainer/PostsContainer';

const Item = ({ item: { _id, itemName, description, brand, size, quality, posts, image}, displayPosts, handleDelete }) => {

    return (
        <div className="item-card" key={_id}>
            <div >
                <p><strong>{itemName}</strong></p>
            </div>
            <img src={image} alt={`${itemName}`} />
            <p> Description of the Item: {description} </p>
            <p> Quality: {quality} </p>
            <p> Brand: {brand} </p>
            <p> Size: {size} </p>
            <p>{posts.length && <PostsContainer posts={posts} displayPosts={displayPosts}/>}</p>
            <button onClick={event => {handleDelete(event,_id)}} >Delete</button>
        </div>
    )
}

export default Item;