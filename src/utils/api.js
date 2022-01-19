const baseURL = "https://api.openweathermap.org/data/2.5/weather" ;
const units = "metric"
const key = "9f0a5c8db4f04c85a7645ab54180ebb8"
export const createURL = (name) => `${baseURL}?q=${name}&units=${units}&appid=${key}`;
export const imgURL = "https://openweathermap.org/img/wn"