import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndD from './components/TemperatureAndD';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './sevices/weatherService';
import { useEffect, useState } from 'react';

function App() {
  const [query,setQuery] = useState({q:'Yerevan'})
  const [units,setUnits] = useState('metric')
  const [weather,setWeather] = useState(null)
  
  useEffect(() => {
    const fetchWeather = async () =>{
      await getFormattedWeatherData({...query, units}).then(data => {
        setWeather(data)
      });
    }
    fetchWeather()
  }, [query,units])
  

  return (
    <div className="App">
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

        {weather && (
          <div>
            <TimeAndLocation weather={weather}/>
            <TemperatureAndD weather={weather}/>
            <Forecast title="Hourly Forecast" items={weather.hourly} />
            <Forecast title="Dayly Forecast" items={weather.daily}/>
          </div>
        )}
        
    </div>
  );
}

export default App;
