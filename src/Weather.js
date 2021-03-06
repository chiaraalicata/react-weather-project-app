import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "0a55ea6886595a2bd2b05951f68c2567";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <>
        <div className="row">
          <div className="col-6 offset-3">
            <form onSubmit={handleSubmit} className="search-engine">
              <div className="row">
                <div className="col-10">
                  <input
                    type="search"
                    placeholder="Enter a city.."
                    className="form-control"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-2">
                  <input type="submit" value="🔎" className="btn btn-primary" />
                </div>
              </div>
            </form>
            <h1 className="city-name my-5">{weatherData.city}</h1>
          </div>
        </div>
        <div className="Weather">
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </>
    );
  } else {
    search();
    return "Loading...";
  }
}
