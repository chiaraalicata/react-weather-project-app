import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by{" "}
          <a
            href="https://www.linkedin.com/in/chiara-alicata-9b0529177/"
            target="_blank"
          >
            Chiara Alicata
          </a>{" "}
          and it is open-sourced on{" "}
          <a
            href="https://github.com/chiaraalicata/react-weather-project-app"
            target="_blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
