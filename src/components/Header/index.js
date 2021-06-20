// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="container-header-A">
        <div className="img-header"> 
          <Link to="/">
            <img src="https://i.ibb.co/HHtk9Sq/Logo-Full-Screen300x300-Normal-Azul.png" alt="Ao Desu Logo" />
          </Link>
        </div>
        <div className="nav-header">
          <nav className="nav">
            <h2 className="links-menu"><Link to="/"><span className="menu-text">Inicio</span> <span className="icon-text"><i class="fas fa-home"></i></span></Link></h2>
            <h2 className="links-menu"><Link to="/anime"><span className="menu-text">Anime</span> <span className="icon-text"><i class="fas fa-compass"></i></span></Link></h2>
            <h2 className="emision"><Link to="/en_emision"><span className="menu-text">En Emisión</span> <span className="icon-text"><i className="fas fa-clock"></i></span></Link></h2>
    
            <div className="btnContainer">
              <button className="search-btn" id="btnSearch1" onclick="mostrarSearchInput()"><i className="fas fa-search" aria-hidden="true"></i></button>
              <button className="search-btn-2" id="btnSearch2" onclick="ocultarSearchInput()"><i className="fas fa-search" aria-hidden="true"></i></button>
              <div className="container-searchInput" id="containerSearch">
                <div className="container-color-input" id="input-container-search">
                  <form>
                <input type="search" placeholder="Busca Tu Anime..." className="inputSearch" id="inputSearch"></input>
                  <button className="buttonSearch">Buscar</button>
                  </form>
                <div className="Q-question">
                  <a href="">¿Problemas con tu busqueda?</a>
                </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

