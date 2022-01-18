import React, { useContext } from 'react'
import { WeatherContextAPI } from '../context/ApiContext'
import Loading from './Loading'
import Search from './Search'

const Main = () => {
    const {loading, weatherData} = useContext(WeatherContextAPI)
    const {location, current} = weatherData
    if(loading) {
        return <Loading></Loading>
    }else{
        
           if(Object.keys(weatherData).length > 0 ) {
                return (
                    <section className='main'>
                    
                    <div className="city-details">
                    <h2>Current Weather</h2>
                  <div className="details">
                  <h3 className='city-name'>{location.name}</h3>
                   <h4 className='temperature'>{current.temperature}&#8451;</h4>
                   <img src={current.weather_icons} alt="" />
                  </div>
                   </div>
              
                    <Search />
                </section>
                )
           }else{
               return <section className='main'>
                    <h2>Current Weather</h2>
                    <Search />
               </section>
           }
        
    }
 
}

export default Main