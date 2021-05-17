// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="container-header-A">
        <div className="img-header"> 
          <Link to="/">
            <img src="https://i.ibb.co/TWnYnYB/Logo300x300.png" alt="Ao Desu Logo" />
          </Link>
        </div>
        <div className="nav-header">
          <nav className="nav">
            <h2 className="links-menu"><Link to="/"><span className="menu-text">Inicio</span> <span className="icon-text"><i class="fas fa-home"></i></span></Link></h2>
            <h2 className="links-menu"><Link to="/anime"><span className="menu-text">Anime</span> <span className="icon-text"><i class="fas fa-compass"></i></span></Link></h2>
            <h2 className="emision"><Link to="/en_emision"><span className="menu-text">En Emisión</span> <span className="icon-text"><i className="fas fa-clock"></i></span></Link></h2>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

