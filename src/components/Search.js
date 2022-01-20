import React, { useContext, useState } from 'react'
import Info from './Info';
import { WeatherContextAPI } from '../context/ApiContext';
import { createURL } from '../utils/api';
const Search = () => {
    const [name, setName] = useState('');
    const {fetchData} = useContext(WeatherContextAPI)
   
   const handleSubmit = (e) =>{
       e.preventDefault();
       const regex = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/
      const valid = regex.test(name)
     
    if(valid && name !== "") {
        fetchData(createURL(name));
    }else{
        console.log("No city with that name was found")
    }
    
   }
    return (
        <div className='info'>
            <form onSubmit={handleSubmit} >
                    <input className='search' type="text" placeholder='Enter a city name' onChange={(e) => setName(e.target.value)} id="search" name="search" />
                    <input type="submit"  className='submit' value="Search"/>
            </form>
            <Info/>
        </div>
    )
}

export default Search
