import React from "react";

import "../styles/Main.css";
import WeatherWindow from "./WeatherWindow";

function Main({forecast, interval}) {
  return (
    <main>
      <WeatherWindow forecast={forecast} interval={interval}/>
    </main>
  )
}

export default Main;
