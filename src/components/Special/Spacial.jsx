// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

// eslint-disable-next-line react/prop-types, no-unused-vars
const Spacial = ({ring}) => {

    const angti = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p><small>Ring: {angti}</small></p>
        </div>
    );
};

export default Spacial;