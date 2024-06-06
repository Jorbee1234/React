import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

const Item = ({ item, onAddToCart, children }) => {
    return (
        <div className="Item">
            <div className="Item-left">
                <div className="Item-image">
                    {/* Add image content here */}
                </div>
                <div className="Item-title">
                    {item.name}
                </div>
                <div className="Item-description">
                    {item.description}
                </div>
            </div>

            <div className="Item-right">
                <div className="Item-price">
                    ${item.price}
                </div>
                {children}
            </div>
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func,
    children: PropTypes.node
};

export default Item;
