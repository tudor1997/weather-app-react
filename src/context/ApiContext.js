import React, { createContext, useState,useEffect } from "react";


const WeatherContextAPI = createContext();


const WeatherContext = ({children}) => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = async (api) => {
       try{
        const data = await fetch(api)
        const result = await data.json();
        setWeatherData(result);
    }catch(err) { console.log(err)}
    }
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    },[])
   
    return <WeatherContextAPI.Provider value={{loading,weatherData, fetchData }}>
        {children}
    </WeatherContextAPI.Provider>
}

export {WeatherContextAPI, WeatherContext};