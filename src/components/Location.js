import React, {useState} from "react";

import "../styles/Location.css";

function Location({location, changeLocation}) {

  const change = (e) => {
    changeLocation(e.target.previousSibling.value);
    e.target.previousSibling.value = "";
  }

  return (
    <div className="location-container">
      <h2>City:</h2>
      <input type="text" placeholder={location}/>
      <button className="location-btn" onClick={change}>Change</button>
    </div>
  )
}

export default Location;
