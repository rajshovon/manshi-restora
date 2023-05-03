import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SngleChefs = () => {
    const chefsSingleDetails = useLoaderData();
    console.log(chefsSingleDetails);
    return (
        <div>
            <h1>this is SngleChefs</h1>
        </div>
    );
};

export default SngleChefs;