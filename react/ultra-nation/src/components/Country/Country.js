import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, population, flag} = props.country;
    return (
        <div className="country-container">
            <p><strong>Country: </strong>{name}</p>
            <p><strong>Population</strong>{population}</p>
            <p><img src={flag} alt=""/></p>
            <button onClick={() => props.handleCountry(props.country)}>Add to Country</button>
        </div>
    );
};

export default Country;