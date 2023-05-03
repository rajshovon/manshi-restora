import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SngleChefs = () => {
    const newsDetails = useLoaderData();
    const { id } = useParams();
    const categoryNews = useLoaderData();
    console.log(newsDetails, categoryNews, id);

    return (
        <div>
            <h1>this is SngleChefs</h1>
            {newsDetails.length}
        </div>
    );
};

export default SngleChefs;