import React from 'react';
import './subCSS/inputs.css';
import {formatToLocalTime} from "../sevices/weatherService";

function TimeAndLocation({weather: {dt,timezone,name,country}}){
    return( 
        <div className='flex-column'>
            <div className='time'>{formatToLocalTime(dt,timezone)} </div>
            <div className='location'>{`${name} ${country}`}</div>
        </div>
    )
}
export default TimeAndLocation;