import React, { useContext } from 'react'
import { WeatherContextAPI } from '../context/ApiContext'

const Info = () => {
    const {weatherData} = useContext(WeatherContextAPI);
       
   
    const {location, current, request} = weatherData
   
        if(Object.keys(weatherData).length > 0) {
          
            return (
                <div className='information'>
                    
                   <h4>{location.localtime}</h4>
                   <h4>Timezone: {location.timezone_id}</h4>
                   <ul className='details'>
                       <h3>Location Details</h3>
                       <li>Country: {location.country}</li>
                       <li>Region: {location.region}</li>
                   </ul>
                   <ul className='details'>
                       <h3>Weather Details</h3>
                       <li>Cloudy: {current.cloudcover}%</li>
                       <li>Humidity: {current.humidity}%</li>
                       <li>Wind: {current.wind_speed}km/h</li>
                       <li>Feels like: {current.feelslike}&#8451;</li>
                       <li>Rainfall: {current.precip}%</li>
                    </ul>
                </div>
            )
        }else{
          return  <div></div>
        }
}

export default Info
