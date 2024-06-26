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
  const [interval, setInterval] = useState("1");

  const changeLocation = (value) => {
    if (value) {
      axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=1&appid=${OpenWeatherAPI}`)
        .then(res => {
          console.log(res.data);
          if (!res.data.length) {
            alert('City does not exist! Enter correct value!')
          } else {
            setLocation(res.data[0].name);
            changeCoords(res.data[0].lat, res.data[0].lon);
          }
        })
    }
  }

  const changeCoords = (newLat, newLon) => {
    let newCords = {lat: newLat, lon: newLon};
    setСoords(newCords);
  }

  const changeInterval = (value) => {
    setInterval(value);
  }

  if (!location) {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        changeCoords(position.coords.latitude, position.coords.longitude)
        setLocation('default');
      });
    }
  }

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&cnt=${40}&appid=${OpenWeatherAPI}&units=metric`)
      .then(res => {
        setLocation(res.data.city.name);
        setForecast(res.data.list);
      })
  }, [coords]);

  return (
    <Fragment>
      <Header location={location} changeLocation={changeLocation} changeInterval={changeInterval}/>
      <Main forecast={forecast} interval={interval}/>
      <Footer/>
    </Fragment>
  )
}

export default App;
