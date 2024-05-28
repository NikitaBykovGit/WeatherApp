import React from "react";

import "../styles/Main.css";
import WeatherWindow from "./WeatherWindow";

function Main(props) {
  return (
    <main>
      <WeatherWindow forecast={props.forecast}/>
    </main>
  )
}

export default Main;
