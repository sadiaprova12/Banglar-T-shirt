/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >{tshirt.name} <button 
           onClick={() => handleRemoveFromCart (tshirt._id)}
        >X</button></p>)
            }
        </div>
    );
};

export default Cart;