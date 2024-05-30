import React, {useState} from "react";

import "../styles/WeatherWindow.css";
import WeatherCell from "./WeatherCell";

function WeatherWindow({forecast, interval}) {

  let daysForecast = [];

  if (forecast.length) {
    daysForecast = forecast.reduce((res, currentEl) => {
      let currentDay = currentEl.dt_txt.split(' ')[0];
      let dayIndex = res.findIndex(item => item.day === currentDay);
      if (dayIndex === -1) {
        res.push({day: currentDay, midTemp: currentEl.main.temp, timeMark: 1});
      } else {
        res[dayIndex].midTemp += currentEl.main.temp;
        res[dayIndex].timeMark += 1;
      }
      return res;
    }, []);
    daysForecast.forEach(item => item.midTemp = Math.round(item.midTemp / item.timeMark));
  }

  if (daysForecast[0] && interval === "1") {
    daysForecast = [daysForecast[0]]
  }

  return (
    <section className = "weather-window">
      {daysForecast.map(forecast => <WeatherCell key={forecast.day} forecast={forecast}/>)}
    </section>
  )
}

export default WeatherWindow;
