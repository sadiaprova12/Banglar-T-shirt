// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Tshirt.css'
// eslint-disable-next-line react/prop-types
const Tshirt = ({tshirt, handleAddToCart}) => {
    // eslint-disable-next-line react/prop-types
    const {picture,name,price} =tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price} </p>
            <button onClick={() => handleAddToCart (tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;