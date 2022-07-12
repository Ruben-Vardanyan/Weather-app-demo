import React, { useState } from 'react';
import './subCSS/inputs.css';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
function Inputs({setQuery,units,setUnits}){
    const [city,setCity] = useState('') 

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name
        if(units !== selectedUnit) setUnits(selectedUnit)
    }
    const handleSearchClick = () => {
        if (city !== '') setQuery({q: city})
    }
    const handleLocationClick = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude
                let lon = position.coords.longitude

                setQuery({
                    lat,lon
                })
            })
        }
    }

    return (
        <div className='Input-Box'>
            <div className='search-part'>
                <input
                value={city} onChange={(e) => setCity(e.currentTarget.value)}
                type="text" className='searchBox' placeholder='City...' />
                <UilSearch
                onClick={handleSearchClick}
                size={25} className="icons" />
                <UilLocationPoint 
                onClick={handleLocationClick}
                size={25} className="icons" />
            </div>
            

            <div className='C-or-F-part'>
                <button onClick={handleUnitsChange} className='button' name='metric'>
                    °C
                </button>
                <div className='line'></div>
                <button onClick={handleUnitsChange} className='button'  name='imperial'>
                    °F
                </button>
            </div>
        </div>
    )
}

export default Inputs;