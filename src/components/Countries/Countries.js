import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Hello from countries</h1>
            <p>Total Countries: {countries.length}</p>
            <div className="counties-container">
                {
                    countries.map(country => <Country
                        key={country.name}
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;