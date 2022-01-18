const baseURL = "https://api.weatherstack.com/";
export const currentURL = `${baseURL}/current?access_key=${process.env.REACT_APP_API_KEY}&query=`