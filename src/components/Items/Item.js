import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ item: { _id, itemName, brand, size, quality, posts, image}, handleDelete }) => {

    return (
        <div className="item-card" key={_id}>
            <div >
                <p><strong> {itemName}</strong></p>
            </div>
            <img src={image} alt={`${itemName}`} />
            {quality !== '' && <p> Quality: {quality} </p> }
            {brand !== '' && <p> Brand: {brand} </p> }
            {size !== '' && <p> Size: {size} </p> }
            <button onClick={event => {handleDelete(event,_id)}} >Delete</button>
            <Link className="button" to={`/add_to_event/${_id}`}> Add to an Event</Link>
        </div>
    )
}

export default Item;