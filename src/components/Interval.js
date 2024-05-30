import React from "react";

import "../styles/Interval.css";

function Interval({changeInterval}) {

    const change = (e) => {
      changeInterval(e.target.value);
    }

    return (
      <div className="interval-container">
        <h2>Interval:</h2>
        <select onChange={change}>
          <option value="1">Today</option>
          <option value="5">5 days</option>
          </select>
          </div>
    )
}

export default Interval;
