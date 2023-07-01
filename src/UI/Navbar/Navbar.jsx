import React from "react";
import logo from "../../images/logo.svg";
import Search from "../SearchBar/Search";

// This function is used for current weather card
// Props: 
// - setWeatherData: Function passed from parent to child for setting the weather data
// - setLoading: Function passed from parent to child for Enable/Disable of Spinner component
// - btnText: value of button text, depending on current/daily weather viewpoints, passed from parent to child
// - isDaily: boolean value to ensure if current viewpoint is of daily weather or current weather, passed from parent to child
// - setBtnText: Function used for setting button text, passed from parent to child
// - setIsDaily: Function responsible for setting isDaily flag, passed from parent to child
export default function Navbar({
  setWeatherData,
  setLoading,
  btnText,
  isDaily,
  setBtnText,
  setIsDaily,
}) {
  // This function is used for when clicked on navbar current/ 7 day weather button
  function onButtonClick() {
    // if current view is of current-weather change that to daily weather
    if (!isDaily) {
      setIsDaily(true);
      setBtnText("Show Current Weather");
    } 
    //if current view is of Daily weather change that to current-weather
    else {
      setIsDaily(false);
      setBtnText("7 Day Weather");
    }
  }
  return (
    <nav className="navbar navbar-primary bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href={`/`}>
          <img
            src={logo}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Vatavaran
        </a>
        <ul className="navbar-nav mb-lg-10">
          <li className="nav-item">
            <Search setWeatherData={setWeatherData} setLoading={setLoading} />
          </li>
        </ul>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <button className="btn btn-warning" onClick={onButtonClick}>
              {btnText}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
