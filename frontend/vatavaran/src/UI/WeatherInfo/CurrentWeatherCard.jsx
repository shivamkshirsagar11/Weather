import React, {useState, useEffect} from "react";
export default function CurrentWeatherCard({ weatherData:{current} }) {
  console.log(current);
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  useEffect(()=>{
    function unixUtcToLocal(){
      var date= new Date(current.sys.sunrise * 1000);
      // Hours part from the timestamp
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = date.getMinutes().length < 2 ? '0' + date.getMinutes(): date.getMinutes();
      // Seconds part from the timestamp
      var seconds = date.getSeconds().length < 2 ? '0' + date.getSeconds(): date.getSeconds();
      var sunrise = hours + ':' + minutes + ':' + seconds;

      var date= new Date(current.sys.sunset * 1000);
      // Hours part from the timestamp
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = date.getMinutes().length < 2 ? '0' + date.getMinutes(): date.getMinutes();
      // Seconds part from the timestamp
      var seconds = date.getSeconds().length < 2 ? '0' + date.getSeconds(): date.getSeconds();
      var sunset = hours + ':' + minutes + ':' + seconds;
      setSunrise(sunrise);
      setSunset(sunset);
    }
    unixUtcToLocal();
  }, [current])
  let prePath = "http://openweathermap.org/img/w/"
  return (
    <div className="d-flex justify-content-center">
      <div className="card text-white bg-dark mb-3" style={{ width: "30rem" }}>
        <img className="img-thumbnai" src={prePath+current.weather[0].icon+'.png'} style={{width:"150px"}}/>
        <div className="card-body">
          <h5 className="card-title">{current.name}</h5>
          <p className="card-text">
           {current.weather[0].description}
          </p>
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
        <hr/>
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
                  <li>Humidity: {current.main.humidity} g.m<sup>-3</sup></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
