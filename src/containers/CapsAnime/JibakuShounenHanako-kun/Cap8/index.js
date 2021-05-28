import React from 'react'
import { Link } from 'react-router-dom'
import OpcionesVideo from '../../../../components/OpcionesVideo'

const urlDefecto = "/ver/jibaku_shounen_hanako-kun/cap"

const JibakuShounenCap8 = () => {
    return (
        <main className="main-caps">
            <div className="container-caps">
                <div className="container-caps-B">
                    <div className="container-video">
                        <OpcionesVideo />

                        <div className="video">
                            <iframe src="https://www.fembed.com/v/jy6n5ad5m5w34l-" frameborder="0" title="Jibaku Shounen Hanako-kun Cap.8"></iframe>
                        </div>
                        
                        <div className="title-cap">
                            <h1>
                                Jibaku Shounen Hanako-kun Cap.8
                            </h1>
                        </div>

                        <div className="change-cap">
                            <Link to={urlDefecto + "7"} className="link-caps">
                                <i className="fas fa-angle-double-left"></i>
                                <span className="text-caps-extra">Anterior Capitulo</span>
                            </Link>

                            <Link to="/anime/jibaku_shounen_hanako-kun" className="links-caps">
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

export default JibakuShounenCap8