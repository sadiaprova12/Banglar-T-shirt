// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css';
const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
// Handle add to cart
    const handleAddToCart = tshirt => {
        const newCart = [...cart, tshirt];
        setCart(newCart);
    }

    // Handle remove to cart
    const handleRemoveFromCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
           <div className='t-shirts-container'>
           {
            tshirts.map(tshirt => <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
            ></Tshirt>)
           }
           </div>
           <div className="cart-container">
            <Cart cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            ></Cart>
           </div>
        </div>
    );
};

export default Home;