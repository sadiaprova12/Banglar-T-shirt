/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'
// eslint-disable-next-line react/prop-types
const Cart = ({cart, handleRemoveFromCart}) => {
    // use if or if else to set a variable that will contain an element, components
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3>Rich People</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            {/* Product common dekhate na chaile css condition ei rokom dekhate hbe [Use ternary] */}
            <h2 className={cart.length === 1 ? 'blue': 'red'}>Order Summary: {cart.length}</h2>
            {/* Product coom dekhate chaile css style contidon emn hbe [ternary inside template string]*/}
            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>
            {/* Ternary condition */}
            {cart.length > 2 ? <span className='purple'>Aro kino</span>: <span className='orange'>Poor</span>}
            {message}

            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >{tshirt.name} <button 
           onClick={() => handleRemoveFromCart (tshirt._id)}
        >X</button></p>)
            }
            {/*  Logical &&: (if the condition is true then the next thing will be displayed) */}

            {
                cart.length === 2 && <p>Double bonanxa!!!</p>
            }
            {/* Logical ||: (if the condition is false then the next thing will be displayed) */}
            {
                cart.length === 3 || <h3>3 ta toh holo na</h3>
            }
        </div>
    );
};

export default Cart;


/**
 * CONDITIONAL RENDERING
 * 1. use if or if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is false then the next thing will be displayed)
 * 
 * */ 

/**
 * CONDITIONAL CSS Class
 * 1. use ternary 
 * 2. ternary inside template string
 * */ 