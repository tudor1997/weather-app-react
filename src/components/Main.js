import React, { useContext, useState,useEffect } from "react";
import { WeatherContextAPI } from "../context/ApiContext";
import Loading from "./Loading";
import Search from "./Search";
import { imgURL } from "../utils/api";


const Main = () => {
  const { loading, weatherData } = useContext(WeatherContextAPI);
  const { name, main } = weatherData;
  let [timeNow, setTimeNow] = useState("");
  const [timeAMPM, setTimeAMPM] = useState("");
  let [dateNow, setDateNow] = useState("");
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? `0${hour % 12}` : hour;
      const minutes = time.getMinutes();
      const minutesFormat = minutes <= 9 ? `0${minutes}` : minutes
      const ampm = hour >= 12 ? "PM" : "AM";
      setTimeAMPM(ampm);
      let timeEl = `${hoursIn12HrFormat}:${minutesFormat} `;
      let time_date = `${days[day]}, ${date}  ${months[month]}`;
      setDateNow(time_date);
      setTimeNow(timeEl);
    }, 1000);
  }, [timeNow]);
  if (loading) {
    return <Loading></Loading>;
  } else {
    if (Object.keys(weatherData).length > 0) {
      let { temp } = main;

      return (
        <section className="main">
          <div className="city-details">
            <h2>Current Weather</h2>
            <div className="details">
              <h3 className="city-name">{name}</h3>
              <div className="temp-container">
                <h4 className="temperature">{Math.round(temp)}&#8451;</h4>
                <img
                  src={`${imgURL}/${weatherData.weather[0].icon}@2x.png`}
                  alt=""
                />
              </div>
            </div>
            <div className="time">
              {timeNow}
              <span className="amPm">{timeAMPM}</span>
            </div>
            <div className="date_now">{dateNow}</div>
          </div>

          <Search />
        </section>
      );
    } else {
      return (
        <section className="main">
              
          <div className="container">
          <h2>Current Weather</h2>
            <div className="time">
              {timeNow}
              <span className="amPm">{timeAMPM}</span>
            </div>
            <div className="date_now">{dateNow}</div>
          </div>
          <Search />
        </section>
      );
    }
  }
};

export default Main;
