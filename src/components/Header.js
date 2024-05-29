import React from "react";

import "../styles/Header.css";
import Location from "./Location";

function Header({location, changeLocation}) {
    return (
    <header>
      <div><h1>Weather Application</h1></div>
      <Location location={location} changeLocation={changeLocation}/>
    </header>
  )
}

export default Header;
