import React, {useState} from "react";

import "../styles/Location.css";

function Location(props) {
  return (
    <div>
      <h2>City:</h2>
      <select>
        <option value="curent-city">Current: {props.location}</option>
        <option value="saint-petersburg">Saint-Petersburg</option>
      </select>
    </div>
  )
}

export default Location;
