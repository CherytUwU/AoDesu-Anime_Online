import React from 'react'
import { Link } from 'react-router-dom'

const urlDefecto = "/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap"

const BunnyGirlSenpaiCap13 = () => {
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
                            <iframe src="https://www.fembed.com/v/r4zqwfe4djeq1mr" frameborder="0" title="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai Cap. 2" allowfullscreen></iframe>
                        </div>

                        <div className="title-cap">
                            <h1>
                                Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai Cap. 13
                            </h1>
                        </div>

                        <div className="change-cap">
                            <Link to={urlDefecto + "12"} className="links-caps">
                                <i className="fas fa-angle-double-left"></i>
                                <span className="text-caps-extra">Anterior Capitulo</span>
                            </Link>

                            <Link to="/anime/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai" className="links-caps">
                                <i className="fas fa-list"></i>
                                <span className="text-caps-extra">Lista De Capitulos</span>
                            </Link>

                            <Link to="/anime" className="links-caps">
                            <i class="fas fa-search-plus"></i>
                                <span className="text-caps-extra">Encuentra Animes</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BunnyGirlSenpaiCap13