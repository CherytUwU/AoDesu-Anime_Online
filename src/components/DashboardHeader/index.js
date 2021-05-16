// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

const DashboardHeader = () => {
  return (
    <header className="header">
      <div className="container-header-A">
        <div className="img-header"> 
          <Link to="/">
            <img src="" />
          </Link>
        </div>
        <div className="nav-header">
          <nav className="nav">
            <h2 className="links-menu"><Link to="/">Inicio</Link></h2>
            <h2 className="links-menu"><Link to="/dashboard">Anime</Link></h2>
            <h2 className="emision"><Link to="">En Emisión  <i className="fas fa-clock"></i></Link></h2>
          </nav>
        </div>
      </div>
      <div className="container-switch-header">
        <div className="container-switch-header-B">
          <button className="switch" id="switch">
            <span className="night">
              <i className="fas fa-moon"></i>
            </span>
            <span className="day">
              <i className="fas fa-sun"></i>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
