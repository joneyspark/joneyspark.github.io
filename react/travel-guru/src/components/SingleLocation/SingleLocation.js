import React from 'react';
import { useParams } from 'react-router-dom';

const SingleLocation = () => {
    let { locationId } = useParams();

    return (
        <div>
            <h1>I'm Single Location : {locationId}</h1>
        </div>
    );
};

export default SingleLocation;