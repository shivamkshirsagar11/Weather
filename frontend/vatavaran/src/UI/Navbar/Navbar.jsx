import React from "react";
import logo from "../../icons/logo.svg";
import Search from "../SearchBar/Search";
export default function Navbar({
  setWeatherData,
  setLoading,
  btnText,
  isDaily,
  setBtnText,
  setIsDaily,
}) {
  function onButtonClick() {
    if (!isDaily) {
      setIsDaily(true);
      setBtnText("Show Current Weather");
    } else {
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
