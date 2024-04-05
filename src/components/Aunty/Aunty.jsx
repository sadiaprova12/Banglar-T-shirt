// eslint-disable-next-line no-unused-vars
import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = (ring) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousin>Afsana</Cousin>
                <Cousin hasFriend={true} ring={ring}>Afana</Cousin>
            </section>
        </div>
    );
};

export default Aunty;