import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="text-center">
        <WeatherTemperature celsius={props.data.temperature} />
        <div className="text-center">
          <WeatherIcon code={props.data.icon} size={64} />
        </div>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize text-center">
            {props.data.description}
          </li>
        </ul>
        <div className="text-center">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
