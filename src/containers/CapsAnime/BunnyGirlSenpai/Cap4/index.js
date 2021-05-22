import React from 'react'
import { Link } from 'react-router-dom'

const urlDefecto = "/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap"

const BunnyGirlSenpaiCap4 = () => {
    return (
        <main className="main-caps">
            <div className="container-caps">
                <div className="container-caps-B">
                    <div className="container-video">
                        <div className="btn-opcion">
                            <button data-title="Fembed">
                                <p>Opción</p>
                                <p>1</p>
                            </button>
                        </div>

                        <div className="video">
                            <iframe src="https://www.fembed.com/v/y136lue1jxnpzj2" frameborder="0" title="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai Cap. 2" allowfullscreen></iframe>
                        </div>

                        <div className="title-cap">
                            <h1>
                                Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai Cap. 4
                            </h1>
                        </div>

                        <div className="change-cap">
                            <Link to={urlDefecto + "3"} className="links-caps">
                                <i className="fas fa-angle-double-right"></i>
                                Anterior Capitulo
                            </Link>

                            <Link to="/anime/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai" className="links-caps">
                                <i className="fas fa-list"></i>
                                Lista De Capitulos
                            </Link>

                            <Link to={urlDefecto + "5"} className="links-caps">
                                <i className="fas fa-angle-double-right"></i>
                                Siguiente Captiulo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BunnyGirlSenpaiCap4