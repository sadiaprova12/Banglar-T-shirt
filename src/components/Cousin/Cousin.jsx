// eslint-disable-next-line no-unused-vars
import React from 'react';
import Friend from '../Friend/Friend';

// eslint-disable-next-line react/prop-types
const Cousin = ({children, hasFriend, ring}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{children}</small></p>
            {hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousin;