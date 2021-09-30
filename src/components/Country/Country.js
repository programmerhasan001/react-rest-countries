import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, flag, population, capital } = props.country;
    return (
        <div className="country">
            <img src={flag} alt="country-flag" />
            <h2>Name : {name}</h2>
            <small>population: {population}</small>
            <h3>Capital : {capital}</h3>
        </div>
    );
};

export default Country;