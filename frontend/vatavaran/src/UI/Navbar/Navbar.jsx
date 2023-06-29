import React from 'react'
import logo from '../../icons/logo.svg';
import Search from '../SearchBar/Search';
export default function Navbar({setWeatherData}) {
  return (
      <nav className="navbar navbar-primary bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href={`/`}>
      <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
      Vatavaran
    </a>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Search setWeatherData={setWeatherData}/>
      </li>
    </ul>
  </div>
</nav>
  )
}
