import React from "react";

import "../styles/ControlPanel.css";
import Interval from "./Interval";
import Location from "./Location";

function ControlPanel({location, changeLocation, changeInterval}) {
    return (
      <div className="control-panel">
        <Interval changeInterval={changeInterval}/>
        <Location location={location} changeLocation={changeLocation}/>
        </div>
      )
}

export default ControlPanel;
