import React from 'react'
import { Link } from 'react-router-dom'
import OpcionesVideo from '../../../../components/OpcionesVideo'

const urlDefecto = "/ver/jibaku_shounen_hanako-kun/cap"

const JibakuShounenCap5 = () => {
    return (
        <main className="main-caps">
            <div className="container-caps">
                <div className="container-caps-B">
                    <div className="container-video">
                        <OpcionesVideo />

                        <div className="video">
                            <iframe src="https://www.fembed.com/v/y136lue1qnyg8q2" frameborder="0" title="Jibaku Shounen Hanako-kun Cap.5"></iframe>
                        </div>
                        
                        <div className="title-cap">
                            <h1>
                                Jibaku Shounen Hanako-kun Cap.5
                            </h1>
                        </div>

                        <div className="change-cap">
                            <Link to={urlDefecto + "4"} className="link-caps">
                                <i className="fas fa-angle-double-left"></i>
                                <span className="text-caps-extra">Anterior Capitulo</span>
                            </Link>

                            <Link to="/anime/jibaku_shounen_hanako-kun" className="links-caps">
                                <i className="fas fa-list"></i>
                                <span className="text-caps-extra">Lista De Capitulos</span>
                            </Link>

                            <Link to={urlDefecto + "6"} className="links-caps">
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

export default JibakuShounenCap5