import React from 'react'
import logo from '../../icons/logo.svg';
export default function Navbar() {
  return (
      <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
      Vatavaran
    </a>
  </div>
</nav>
  )
}
