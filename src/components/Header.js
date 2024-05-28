import React from "react";

import "../styles/Header.css";
import Location from "./Location";

function Header(props) {
    return (
    <header>
      <div><h1>Weather Application</h1></div>
      <Location location={props.location}/>
    </header>
  )
}

export default Header;
