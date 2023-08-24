import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=''>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid nav-items">
          <Link className="navbar-brand" to="/CountDown-F1">F1 Time App </Link>
          <Link className="navbar-brand" to="/CountDown-F1/Driver-Standings">Drivers </Link>
          <Link className="navbar-brand" to="/CountDown-F1/Team-Constructors">Constructors </Link>
          <Link className="navbar-brand" to="/CountDown-F1/Seasons">Season </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
