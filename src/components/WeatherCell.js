import React from "react";

import "../styles/WeatherCell.css";

function WeatherCell({forecast}) {
  return (
    <div className="weather-cell">
      <h3>Data: {forecast.day}</h3>
      <h3>Temp: {forecast.midTemp}°C</h3>
    </div>
  )
}

export default WeatherCell;
