import React, { useContext } from 'react'
import { WeatherContextAPI } from '../context/ApiContext'

const Info = () => {
    const {weatherData} = useContext(WeatherContextAPI);
       
   
    const {main, sys,wind,coord} = weatherData
   
        if(Object.keys(weatherData).length > 0) {
          
            return (
                <div className='information'>
                    
                  
                   
                   <ul className='details'>
                       <h3>Location Details</h3>
                       <li>Country: {sys.country}</li>
                        <li>Longitute: {coord.lon}</li>
                        <li>Latitude: {coord.lat}</li>
                   </ul>
                   <ul className='details'>
                       <h3>Weather Details</h3>
                       <li>Cloudy: {weatherData.weather[0].description}</li>
                       <li>Humidity: {main.humidity}%</li>
                       <li>Wind: {wind.speed}km/h</li>
                       <li>Feels like: {Math.round(main.feels_like)}&#8451;</li>
                        <li>Min Temp: {Math.round(main.temp_min)}&#8451;</li>
                        <li>Max Temp: {Math.round(main.temp_max)}&#8451;</li>
                    </ul>
                </div>
            )
        }else{
          return  <div></div>
        }
}

export default Info
