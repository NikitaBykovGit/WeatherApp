import React, {Fragment, useState, useEffect} from "react";
import axios from "axios";

import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const OpenWeatherAPI = "64e9312bab61a8de5fbe54b0c367dc36";

function App() {
  const [coords, setСoords] = useState({lat: 55.75, lon: 37.61});
  const [location, setLocation] = useState(undefined);
  const [forecast, setForecast] = useState([]);

  if (!location) {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setСoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
        setLocation('Moscow');
      });
    }
  }

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${OpenWeatherAPI}&units=metric`)
      .then(res => {
        setLocation(res.data.city.name);
        setForecast(res.data.list);
      })
  }, [coords]);

  return (
    <Fragment>
      <Header location={location}/>
      <Main forecast={forecast}/>
      <Footer/>
    </Fragment>
  )
}

export default App;
