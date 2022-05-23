import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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
