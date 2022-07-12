import React from 'react';
import './subCSS/TopButtons.css';

function TopButtons({setQuery}) {
    const cities = [
        {
            id:1,
            title:'Yerevan'
        },
        {
            id:2,
            title:'Moscow'
        },
        {
            id:3,
            title:'Paris'
        },
        {
            id:4,
            title:'Los Angeles'
        },
        {
            id:5,
            title:'Tokyo'
        }
    ]

    return (
        <div className="top-buttons">
            {cities.map(city => (
                <button key={city.id} onClick={() => setQuery({q: city.title})}>
                    {city.title}
                </button>
            ))}
        </div>
    )
}

export default TopButtons;