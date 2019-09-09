import React from 'react';

const ItemHeader = ({ name, image, description }) => {
    return (
        <section className="item-header">
            <div className="item-name">
                <h2>{name}</h2>
                <h5>{description}</h5>
            </div>
            <div className="item-image">
                <img src={image} alt="item" />
            </div>
        </section>
    );
};

export default ItemHeader;