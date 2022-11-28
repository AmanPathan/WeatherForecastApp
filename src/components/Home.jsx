import React, { useState, useEffect } from "react";
import "./card.css";
import axios from "axios";

const Home = () => {
    const [lat,setLat] = useState('');
    const [lon,setLon] = useState('');
    const [data,setData] = useState('');
    const [city,setCity] = useState('');
    const [weather,setWeather] = useState('');
    const API = process.env.REACT_APP_API_KEY;
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude)
            setLon(position.coords.longitude)
        });
    })
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`
    axios.get(url).then((res)=>{
        setData(res.data);
        setCity(data.name);
        setWeather(data.weather);
    }).catch((error)=>{
        console.log(error);
    });
  return (
    <>
      <div className="wrapper">
        <div className="card">
          {!city ? (
            <div className="info">
              <h3>No Data Found</h3>
            </div>
          ) : (
            <>
              <div className="info">
                <img
                alt="Couldn't Load"
                  className="image"
                  src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                />
                <h1 className="card-title1">{city}</h1>
                <h3 className="card-title">{data.main.temp} °C</h3>
                <h3 className="card-title">{weather[0].main}</h3>
                <p className="card-content">
                  Min : {data.main.temp_min} °C <span>|</span> Max : {data.main.temp_max} °C
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
