import React from 'react'
import { Link } from 'react-router-dom'
import OpcionesVideo from '../../../../components/OpcionesVideo'

const urlDefecto = "/ver/boku_no_hero_academia_seson_one/cap"

const BokuNoHeroSeasonOneCap8 = () => {
    return (
        <main className="main-caps">
            <div className="container-caps">
                <div className="container-caps-B">
                    <div className="container-video">
                        <OpcionesVideo />

                        <div className="video">
                            <iframe src="https://www.fembed.com/v/nnrd5h2xmk274dz" frameborder="0" title="Boku no Hero Cap. 1" allowfullscreen></iframe>
                        </div>

                        <div className="title-cap">
                            <h1>
                                Boku no Hero Cap. 8
                            </h1>
                        </div>

                        <div className="change-cap">
                            <Link to={urlDefecto + "7"} className="links-caps">
                                <i className="fas fa-angle-double-left"></i>
                                <span className="text-caps-extra">Anterior Capitulo</span>
                            </Link>

                            <Link to="/anime/boku_no_hero_academia_season_one" className="links-caps">
                                <i className="fas fa-list"></i>
                                <span className="text-caps-extra">Lista De Capitulos</span>
                            </Link>

                            <Link to={urlDefecto + "9"} className="links-caps">
                                <i className="fas fa-angle-double-right"></i>
                                <span className="text-caps-extra">Siguiente Captiulo</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BokuNoHeroSeasonOneCap8