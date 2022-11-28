import React, { useState, useEffect } from "react";
import './card.css';

const Search = ()=>{
    const [data, setData] = useState('');
    const [city, setCity] = useState('');
    const [otherData, setOtherData] = useState('');
    useEffect(() => {
      const API = process.env.REACT_APP_API_KEY
        const fetchApi = async () => {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&APPID=${API}`;
          const response = await fetch(url);
          const resJson = await response.json();
          setCity(resJson.main);
          setOtherData(resJson.weather);
        };
    
        fetchApi();
      }, [data]);
  
    return (
        <>
      <div className="wrapper">
        <div className="card">
          <div className="inputData">
            <label id="label">Search</label>
            <input
              type="search"
              className="inputField"
              placeholder="Search City"
              value={data}
              onChange={(event) => {
                setData(event.target.value);
              }}
            />
          </div>
          {!city ? (
            <div className="info">
              <h3>No Data Found</h3>
            </div>
          ) : (
            <>
              <div className="info">
                <img className="image" alt="Couldn't Load"
                src={`http://openweathermap.org/img/wn/${otherData[0].icon}@2x.png`} />
                <h1 className="card-title1">{data}</h1>
                <h3 className="card-title">{city.temp} °C</h3>
                <h3 className="card-title">{otherData[0].main }</h3>
                <p className="card-content">
                  Min : {city.temp_min} °C <span>|</span> Max : {city.temp_max} °C
                </p>
              </div>
            </>
          )}
        </div>
      </div>
        </>
    );
}

export default Search;