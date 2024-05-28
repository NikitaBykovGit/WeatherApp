import React, {useState} from "react";

import "../styles/WeatherWindow.css";

function WeatherWindow(props) {
  console.log(props.forecast);
  return (
    <section className = "weather-window">
      {props.forecast.map(day => <div key={day.dt}>{day.dt_txt} {day.main.temp}</div>)}
    </section>
  )
}

export default WeatherWindow;
