import React from 'react';
import './subCSS/inputs.css';
import {formatToLocalTime} from "../sevices/weatherService";
import { 
    UilArrowUp ,
    UilArrowDown ,
    UilTemperature ,
    UilTear ,
    UilWind ,
    UilSun ,
    UilSunset
} from '@iconscout/react-unicons';
function TemperatureAndD({weather:{
    details,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,timezone
}}){
    return( 
        <div>
            <div className='flex-row'>
            <div>
                    <p className='details'>{details}</p>
            </div>
            <div>
                    <p className='temp'>{`${temp.toFixed()}°`}</p>
            </div>
            <div>
                    <div className='detail-box'>
                        <UilTemperature size={18} />
                        Real fell:
                        <span className='sub-temp'>{`${feels_like.toFixed()}°`}</span>
                    </div>
                    <div className='detail-box'>
                        <UilTear size={18} />
                        Humidity:
                        <span className='sub-temp'>{`${humidity.toFixed()}%`}</span>
                    </div>
                    <div className='detail-box'>
                        <UilWind size={18} /> 
                        Wind Speed:
                        <span className='sub-temp'>{`${speed.toFixed()}km/h`}</span>
                    </div>
                    
            </div>
            </div>
            <div className='flex-row'>
                <div className='aligncenterbox'>
                    <UilSun />
                    <p>Rise <span className='sub-temp'>
                            {formatToLocalTime(sunrise,timezone, "hh:mm a")}
                        </span>
                    </p>
                </div>
                <div className='aligncenterbox'>
                    <UilSunset />
                    <p>Set <span className='sub-temp'>
                            {formatToLocalTime(sunset,timezone, "hh:mm a")}    
                        </span></p>
                </div>
                <div className='aligncenterbox'>
                    <UilArrowUp />
                    <p>High <span className='sub-temp'>{`${temp_max.toFixed()}°`}</span></p>
                </div>
                <div className='aligncenterbox'>
                    <UilArrowDown />
                    <p>Low <span className='sub-temp'>{`${temp_min.toFixed()}°`}</span></p>
                </div>
            </div>
        </div>
        
        
    )
}
export default TemperatureAndD;