import React from 'react';
import { Link } from 'react-router-dom';

const EventItem = ({ item: { _id, image, itemName, quality, brand, size, } }) => {
    return (
        <div className="item-card" key={_id}>
            <div >
                <p><strong> {itemName}</strong></p>
            </div>
            <img src={image} alt={`${itemName}`} />
            {quality !== '' && <p> Quality: {quality} </p> }
            {brand !== '' && <p> Brand: {brand} </p> }
            {size !== '' && <p> Size: {size} </p> }
            <Link className="button" to={`/item/${_id}`}> See more Item Info </Link>
        </div>
    )
};

export default EventItem;