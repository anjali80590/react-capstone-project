import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
  // api
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=6c5aa0b0b2444637bd9214533232510&q=Delhi"
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data", error);
      });
  }, []);

  const getWeatherIcon = (code) => {
    switch (code) {
      case 1000:
        return "/images/sunny.png";
      case 1030:
        return "/images/partly-cloudy.png";
      case 1063:
        return "/images/rain.png";
      default:
        return "/images/sunny.png"; 
    }
  };
  return (
    <div className="weather-con">
      {weatherData ? (
        <div>
          <p className="weatherdt">
            {new Date().toLocaleDateString()} &nbsp;{" "}
            <span className="weathert">{new Date().toLocaleTimeString()}</span>
          </p>
          <br />
          <div className="wbox">
            <img
              className="wicon-p"
              style={{ width: "50px", height: "70px" }}
              src={getWeatherIcon(weatherData.current.condition.code)}
              alt=""
            />
            <p className="wcondition"> {weatherData.current.condition.text}</p>
            <p className="line"></p>
            <p className="wtemperature">
              {weatherData.current.temp_c}°C <br />
              <img className="wicon-p" src="/images/presure.png" alt="" />
            </p>
            <p className="line"></p>
            <div className="wright">
              <p className="wicon-w">
                {" "}
                <img className="wicon " src="/images/wind.png" alt="" />{" "}
                {weatherData.current.wind_kph} km/h <br />{" "}
                <span className="wpos">Wind</span>
              </p>
              <p className="wicon-h">
                <img
                  className="wicon wicon-h"
                  src="/images/humind.png"
                  alt=""
                />
                {weatherData.current.humidity}% <br />{" "}
                <span className="wpos">Humidity</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
