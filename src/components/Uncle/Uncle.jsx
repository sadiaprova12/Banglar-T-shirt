// eslint-disable-next-line no-unused-vars
import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousin>Raihan</Cousin>
                <Cousin>Raba</Cousin>
            </section>
        </div>
    );
};

export default Uncle;