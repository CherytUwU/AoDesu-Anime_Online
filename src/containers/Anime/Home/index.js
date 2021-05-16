// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

const Anime = () => {
  return (
    <main className="main">
        <div className="container-ue">
          <div className="title">
            <h3 className="title-main">Encuentra lo que buscas</h3>
            <div className="buscador-categoria">
              <input type="search" placeholder="Busca tu anime favorito"></input>
            </div>
           </div>
          <div className="contenido">

            <Link to="/anime/kimetsu_no_yaiba" className="link-contenido">
              <div className="contenedor-contenido-categorias">
                <div className="hover-interface">
                  <div className="arrow-interface">
                    <i className="far fa-arrow-alt-circle-right"></i>
                  </div>
                </div>
                <img src="https://i.ibb.co/vVW29T6/Kimetsu-no-yaiba-season1-normal.jpg" title="Kimetsu no Yaiba" />
              </div>
            </Link>

          </div>
        </div>
    </main>
  )
}

export default Anime
