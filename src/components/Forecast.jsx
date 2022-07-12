import React from 'react';
import './subCSS/inputs.css';
function Forecast({title,items}) {
    console.log(items)
    return (
        <div className='flex-column'>
            <p className='p'>{title}</p>
            <span className='wide-line'></span>
            <div className="flex-row w100">

                {items.map((item) => (
                    <div className='flex-column'>
                        <p className='p'>{item.title}</p> 
                        <p className='p'>{`${item.temp.toFixed()}°`}</p>
                    </div>
                ))}
                
                
            </div>
        </div>

    )
}

export default Forecast;