import React from "react";
import "./Weather.css";
import "./Search.css";

import Search from "./Search";
export default function Weather() {
  let weatherData = {
    city: "Denver",
    date: "Thursday 5:00",
    description: "Cloudy",
    imgUrl: "https://openweathermap.org/img/wn/04d@2x.png",
    temperature: "75",
    humidity: "10",
    wind: "5",
    feels: "80",
  };

  return (

    <div className="weather-app-wrapper">
      <div className="weather-app">
        <Search />
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Current Time: {weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <div className="float-left">
                <img
                  src={weatherData.imgUrl}
                  alt="weather-icon"
                  className="float-left"
                />
                <strong id="temperature">
                  {weatherData.temperature}
                  <span className="units">°F</span>
                </strong>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: {weatherData.feels}°F</li>
              <li>humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} mph</li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </div>
      <small>
        <a href="https://github.com/orpulick/My_weather_app">
          Open sourced code
        </a>
        & Hosted by
        <a href="https://lighthearted-gnome-c17e1b.netlify.app/"> Netlify. </a>
        Coded by Olivia Pulick
      </small>
    </div>
  );
}
