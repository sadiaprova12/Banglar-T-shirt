/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Cart = ({cart}) => {
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
        </div>
    );
};

export default Cart;