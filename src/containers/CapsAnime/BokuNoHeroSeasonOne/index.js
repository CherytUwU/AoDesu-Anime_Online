import React from 'react'
import { Link } from 'react-router-dom'

const urlCap = "/ver/boku_no_hero_academia_seson_one/cap"
const nameCaps = {
    Cap1: {
        name: "Izuku Midoriya: Origen",
        date: "03 / Abril / 2016"
    },
    Cap2: {
        name: "Lo que necesita un héroe",
        date: "10 / Abril / 2016"
    },
    Cap3: {
        name: "Músculos excelentes",
        date: "17 / Abril / 2016"
    },
    Cap4: {
        name: "Línea de salida",
        date: "24 / Abril / 2016"
    },
    Cap5: {
        name: "Lo que puedo hacer por ahora",
        date: "01 / Mayo / 2016"
    },
    Cap6: {
        name: "¡Enójate, maldito friki!",
        date: "08 / Mayo / 2016"
    },
    Cap7: {
        name: "Deku vs. Kacchan",
        date: "15 / Mayo / 2016"
    },
    Cap8: {
        name: "Línea de salida de Bakugo",
        date: "22 / Mayo / 2016"
    },
    Cap9: {
        name: "¡Sí, vamos por todas, Lida!",
        date: "29 / Mayo / 2016"
    },
    Cap10: {
        name: "Encuentro con lo desconocido",
        date: "05 / Junio / 2016"
    },
    Cap11: {
        name: "Game Over",
        date: "12 / Junio / 2016"
    },
    Cap12: {
        name: "All Might",
        date: "19 / Junio / 2016"
    },
    Cap13: {
        name: "En cada uno de nuestros corazones",
        date: "26 / Junio / 2016"
    }
} 


const BokuNoHeroOne = () => {
    return (
        <main className="main-caps">
            <div className="container-info-list-e">
                <div className="info">
                    <div className="img-info">
                        <img src="https://i.ibb.co/QXjvz4k/boku-no-hero-season1-normal.jpg" alt="Boku No Hero Season One" />
                        <h2 className="status-finalizado">Finalizado</h2>
                    </div>
                    <div className="contenido-info small">
                        <h1>Boku no Hero Academia</h1>
                        <h2>My Hero Academia</h2>

                        <h3 className="informacion">
                            <span className="plataforma-upload">TV</span>
                            <span className="fecha-upload">2016</span>
                            <span className="temporada-upload">Temporada</span>
                            <span className="info-temporada-upload-invierno"><i class="far fa-snowflake"></i> Invierno 2016</span>
                        </h3>

                        <h3 className="generos">
                            <span id="accion">Acción</span>
                            <span id="comedia">Comedia</span>
                            <span id="escolar">Escolares</span>
                            <span id="shounen">Shounen</span>
                            <span id="superpoderes">Superpoderes</span>
                        </h3>

                        <p>
                        Las personas no nacen igual. El protagonista de esta historia es uno de esos casos raros que nacen sin superpoderes, pero esto no le impedir&aacute; perseguir su sue&ntilde;o: ser un gran h&eacute;roe como el legendario All-Might. Para convertirse en el h&eacute;roe que quiere ser, se apuntar&aacute; a una de las academias de h&eacute;roes m&aacute;s prestigiosas del pa&iacute;s: Yueiko. Con la ayuda de su &iacute;dolo, All-Might, &iquest;podr&aacute; convertirse en un verdadero h&eacute;roe?
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-list-e">
                <div className="contenido-list-e">
                    <div className="name-list">
                        <h1><i className="fas fa-list"></i> Listado de episodios</h1>
                    </div>
                    <div className="listado">
                        <Link to={urlCap + "1"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/qWZshPk/boku-no-hero-season1-larga.jpg" alt="Boku no Hero Academia cap1"/>
                                </div>
                                <div className="titulo-listado">
                                    <h2>Boku no Hero Academia <span className="episodio">Episodio 1</span></h2>
                                    <h3>"{nameCaps.Cap1.name}"</h3>
                                    <p>{nameCaps.Cap1.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "2"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/qWZshPk/boku-no-hero-season1-larga.jpg" alt="Boku no Hero Academia cap1"/>
                                </div>
                                <div className="titulo-listado">
                                    <h2>Boku no Hero Academia <span className="episodio">Episodio 2</span></h2>
                                    <h3>"{nameCaps.Cap2.name}"</h3>
                                    <p>{nameCaps.Cap2.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "3"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/qWZshPk/boku-no-hero-season1-larga.jpg" alt="Boku no Hero Academia cap1"/>
                                </div>
                                <div className="titulo-listado">
                                    <h2>Boku no Hero Academia <span className="episodio">Episodio 3</span></h2>
                                    <h3>"{nameCaps.Cap3.name}"</h3>
                                    <p>{nameCaps.Cap3.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "4"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/qWZshPk/boku-no-hero-season1-larga.jpg" alt="Boku no Hero Academia cap1"/>
                                </div>
                                <div className="titulo-listado">
                                    <h2>Boku no Hero Academia <span className="episodio">Episodio 4</span></h2>
                                    <h3>"{nameCaps.Cap4.name}"</h3>
                                    <p>{nameCaps.Cap4.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "5"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/qWZshPk/boku-no-hero-season1-larga.jpg" alt="Boku no Hero Academia cap1"/>
                                </div>
                                <div className="titulo-listado">
                                    <h2>Boku no Hero Academia <span className="episodio">Episodio 5</span></h2>
                                    <h3>"{nameCaps.Cap5.name}"</h3>
                                    <p>{nameCaps.Cap5.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "6"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/qWZshPk/boku-no-hero-season1-larga.jpg" alt="Boku no Hero Academia cap1"/>
                                </div>
                                <div className="titulo-listado">
                                    <h2>Boku no Hero Academia <span className="episodio">Episodio 6</span></h2>
                                    <h3>"{nameCaps.Cap6.name}"</h3>
                                    <p>{nameCaps.Cap6.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "7"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/qWZshPk/boku-no-hero-season1-larga.jpg" alt="Boku no Hero Academia cap1"/>
                                </div>
                                <div className="titulo-listado">
                                    <h2>Boku no Hero Academia <span className="episodio">Episodio 7</span></h2>
                                    <h3>"{nameCaps.Cap7.name}"</h3>
                                    <p>{nameCaps.Cap7.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "8"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/qWZshPk/boku-no-hero-season1-larga.jpg" alt="Boku no Hero Academia cap1"/>
                                </div>
                                <div className="titulo-listado">
                                    <h2>Boku no Hero Academia <span className="episodio">Episodio 8</span></h2>
                                    <h3>"{nameCaps.Cap8.name}"</h3>
                                    <p>{nameCaps.Cap8.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "9"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/qWZshPk/boku-no-hero-season1-larga.jpg" alt="Boku no Hero Academia cap1"/>
                                </div>
                                <div className="titulo-listado">
                                    <h2>Boku no Hero Academia <span className="episodio">Episodio 9</span></h2>
                                    <h3>"{nameCaps.Cap9.name}"</h3>
                                    <p>{nameCaps.Cap9.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "10"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/qWZshPk/boku-no-hero-season1-larga.jpg" alt="Boku no Hero Academia cap1"/>
                                </div>
                                <div className="titulo-listado">
                                    <h2>Boku no Hero Academia <span className="episodio">Episodio 10</span></h2>
                                    <h3>"{nameCaps.Cap10.name}"</h3>
                                    <p>{nameCaps.Cap10.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "11"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/qWZshPk/boku-no-hero-season1-larga.jpg" alt="Boku no Hero Academia cap1"/>
                                </div>
                                <div className="titulo-listado">
                                    <h2>Boku no Hero Academia <span className="episodio">Episodio 11</span></h2>
                                    <h3>"{nameCaps.Cap11.name}"</h3>
                                    <p>{nameCaps.Cap11.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "12"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/qWZshPk/boku-no-hero-season1-larga.jpg" alt="Boku no Hero Academia cap1"/>
                                </div>
                                <div className="titulo-listado">
                                    <h2>Boku no Hero Academia <span className="episodio">Episodio 12</span></h2>
                                    <h3>"{nameCaps.Cap12.name}"</h3>
                                    <p>{nameCaps.Cap12.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "13"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/qWZshPk/boku-no-hero-season1-larga.jpg" alt="Boku no Hero Academia cap1"/>
                                </div>
                                <div className="titulo-listado">
                                    <h2>Boku no Hero Academia <span className="episodio">Episodio 13</span></h2>
                                    <h3>"{nameCaps.Cap13.name}"</h3>
                                    <p>{nameCaps.Cap13.date}</p>
                                </div>
                            </div>
                        </Link>
                        
                    </div>
                    <div className="list-arrow">
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BokuNoHeroOne