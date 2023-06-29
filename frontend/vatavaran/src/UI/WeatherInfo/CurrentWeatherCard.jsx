import React, { useState, useEffect } from "react";
import unixUtcToLocal from "../../Actions/Date/UnixUtcToLocal";
export default function CurrentWeatherCard({ weatherData: { current } }) {
  console.log(current);
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  useEffect(() => {
    let [sunrise, sunset] = unixUtcToLocal(
      current.sys.sunrise,
      current.sys.sunset
    );
    setSunrise(sunrise);
    setSunset(sunset);
  }, [current]);
  let prePath = "http://openweathermap.org/img/wn/";
  return (
    <div className="d-flex justify-content-center p-5">
      <div
        className="card text-white bg-dark shadow-lg p-3 mb-5 rounded"
        style={{ width: "30rem" }}
      >
        <div className='text-center'>
        <img
          className="img-thumbnai"
          src={prePath + current.weather[0].icon + "@2x.png"}
          style={{ width: "150px" }}
          alt="this is perception of current weather"
        />
        </div>
        <div className="card-body">
          <h5 className="card-title">{current.name}</h5>
          <p className="card-text">{current.weather[0].description}</p>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <ul>
              <li>
                Temprature
                <ul>
                  <li>Current: {current.main.temp} C</li>
                  <li>Feels like: {current.main.feels_like} C</li>
                  <li>Min: {current.main.temp_min} C</li>
                  <li>Max: {current.main.temp_max} C</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                Wind
                <ul>
                  <li>Speed: {current.wind.speed} m/s</li>
                  <li>Degree: {current.wind.deg}°</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <ul>
              <li>
                Sun time
                <ul>
                  <li>Sunrise: {sunrise} </li>
                  <li>Sunset: {sunset} </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                Other
                <ul>
                  <li>Pressure: {current.main.pressure} Pa</li>
                  <li>
                    Humidity: {current.main.humidity} g.m<sup>-3</sup>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
