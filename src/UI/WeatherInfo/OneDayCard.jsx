import React, { useState, useEffect } from "react";
import unixUtcToLocal from "../../Actions/Date/UnixUtcToLocal";

// This function is used for showing daily weather data of particular day
// Props: 
// - Data: object containing weather data of daily weather
// - city: name of current searched/located location
export default function OneDayCard({ data, city }) {
  // url of openweathermap for fetching icons
  let prePath = "http://openweathermap.org/img/wn/";
  // getting date from utc timestamp and converting to local datetime format
  let date = new Date(data.dt * 1000).toLocaleDateString();
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  useEffect(() => {
    let [sunrise, sunset] = unixUtcToLocal(data.sunrise, data.sunset);
    setSunrise(sunrise);
    setSunset(sunset);
  }, [data]);
  return (
    <>
      <div
        className="card text-white bg-dark rounded"
        style={{ width: "25rem" }}
      >
        <div className="text-center">
          {" "}
          <img
            src={prePath + data.weather[0].icon + "@2x.png"}
            style={{ width: "13rem" }}
            className="card-img-top"
            alt="weather"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {city}, {date}
          </h5>
          <p className="card-text">{data.weather[0].description} 📝</p>
        </div>
        <div className="text-start mx-3">
          <hr />
          <div className="row">
            <div className="col">Temp: {data.temp.day} C 🌡️</div>
            <div className="col">Feels-Like: {data.feels_like.day} C 🌡️</div>
          </div>
          <hr />
          <div className="row">
            <div className="col">Wind: {data.speed} m/s💨</div>
            <div className="col">
              Humidity: {data.humidity} g.m<sup>-3</sup>💧
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">Sunrise: {sunrise}🌅</div>
            <div className="col">Sunset: {sunset}🌇</div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
