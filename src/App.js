import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App(props) {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Francisco" />
        <footer>
          This project is coded by{" "}
          <a
            href="https://www.linkedin.com/in/chiara-alicata-9b0529177/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chiara Alicata
          </a>{" "}
          and it is open-sourced on{" "}
          <a
            href="https://github.com/chiaraalicata/react-weather-project-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
