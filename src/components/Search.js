import React, { useContext, useState } from 'react'
import Info from './Info';
import {BsSearch} from 'react-icons/bs'
import { WeatherContextAPI } from '../context/ApiContext';
import { createURL } from '../utils/api';
const Search = () => {
    const [name, setName] = useState('');
    const {fetchData} = useContext(WeatherContextAPI)
   
   const handleSubmit = (e) =>{
       e.preventDefault();
    fetchData(createURL(name));
    
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
