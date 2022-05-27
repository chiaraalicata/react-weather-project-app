import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = `0a55ea6886595a2bd2b05951f68c2567`;
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="col">
        <span className="WeatherForecast-day">Thu</span>
        <WeatherIcon code="01d" size={36} />
        <span className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max"> 19° </span>
          <span className="WeatherForecast-temperature-min"> 10° </span>
        </span>
      </div>
      <div className="col">
        <span className="WeatherForecast-day">Thu</span>
        <WeatherIcon code="01d" size={36} />
        <span className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max"> 19° </span>
          <span className="WeatherForecast-temperature-min"> 10° </span>
        </span>
      </div>
      <div className="col">
        <span className="WeatherForecast-day">Thu</span>
        <WeatherIcon code="01d" size={36} />
        <span className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max"> 19° </span>
          <span className="WeatherForecast-temperature-min"> 10° </span>
        </span>
      </div>
      <div className="col">
        <span className="WeatherForecast-day">Thu</span>
        <WeatherIcon code="01d" size={36} />
        <span className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max"> 19° </span>
          <span className="WeatherForecast-temperature-min"> 10° </span>
        </span>
      </div>
      <div className="col">
        <span className="WeatherForecast-day">Thu</span>
        <WeatherIcon code="01d" size={36} />
        <span className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max"> 19° </span>
          <span className="WeatherForecast-temperature-min"> 10° </span>
        </span>
      </div>
    </div>
  );
}
