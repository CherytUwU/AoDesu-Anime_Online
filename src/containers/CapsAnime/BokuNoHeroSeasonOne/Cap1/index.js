import React from 'react'
import { Link } from 'react-router-dom'
import OpcionesVideo from '../../../../components/OpcionesVideo'

const urlDefecto = "/ver/boku_no_hero_academia_seson_one/cap"

const BokuNoHeroSeasonOneCap1 = () => {
    return (
        <main className="main-caps">
            <div className="container-caps">
                <div className="container-caps-B">
                    <div className="container-video">
                        <OpcionesVideo />

                        <div className="video">
                            <iframe src="https://www.fembed.com/v/dz810fxd54mr-l7" frameborder="0" title="Boku no Hero Cap. 1" allowfullscreen></iframe>
                        </div>

                        <div className="title-cap">
                            <h1>
                                Boku no Hero Cap. 1
                            </h1>
                        </div>

                        <div className="change-cap">

                        <Link to="/anime/boku_no_hero_academia_season_one" className="links-caps">
                                <i className="fas fa-list"></i>
                                <span className="text-caps-extra">Lista De Capitulos</span>
                            </Link>

                            <Link to={urlDefecto + "2"} className="links-caps">
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

export default BokuNoHeroSeasonOneCap1