import React from "react";

import "../styles/Header.css";
import ControlPanel from "./ControlPanel";

function Header({location, changeLocation, changeInterval}) {
    return (
      <header>
        <div><h1>Weather Application</h1></div>
        <ControlPanel location={location} changeLocation={changeLocation} changeInterval={changeInterval}/>
        </header>
    )
}

export default Header;
