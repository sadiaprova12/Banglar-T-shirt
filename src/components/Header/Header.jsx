// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/about">CheckOut</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;