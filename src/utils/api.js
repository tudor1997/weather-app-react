const baseURL = "https://api.openweathermap.org/data/2.5/weather" ;
const units = "metric"
export const createURL = (name) => `${baseURL}?q=${name}&units=${units}&appid=${process.env.REACT_APP_API_KEY}`;
export const imgURL = "https://openweathermap.org/img/wn"