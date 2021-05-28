import React from 'react'
import { Link } from 'react-router-dom'

const urlCap = "/ver/jibaku_shounen_hanako-kun/cap"
const nameCaps = {
    Cap1: {
        name: "Hanako-san, Hanako-san, ¿estás aquí?",
        date: "22 / Mayo / 2015 "
    },
    Cap2: {
        name: "¡Infiltración! Los siete misterios de la escuela «Escalera Misaki»",
        date: "21 / Noviembre / 2015"
    },
    Cap3: {
        name: "Quiero saber más sobre Hanako",
        date: "27 / Mayo / 2016"
    },
    Cap4: {
        name: "La relación correcta entre lo extraño y lo humano",
        date: "27 / Septiembre / 2016"
    },
    Cap5: {
        name: "Una trampa astuta, dulce y misteriosa",
        date: "27 / Febrero / 2017"
    },
    Cap6: {
        name: "Quiero ser tu único caballero",
        date: "27 / Julio / 2017"
    },
    Cap7: {
        name: "Este es el fondo del infierno",
        date: "27 / Diciembre / 2017"
    },
    Cap8: {
        name: "Tiempo que quieres limitar",
        date: "26 / Mayo / 2018"
    },
    Cap9: {
        name: "Este es el mundo de la imaginación",
        date: "26 / Octubre / 2018"
    },
    Cap10: {
        name: "El deseo de nadie realmente se hace realidad",
        date: "27 / Marzo / 2019"
    },
    Cap11: {
        name: "El único camino que queda para aquellos que no pueden crecer",
        date: "27 / Agosto / 2019"
    },
    Cap12: {
        name: "Hanako-san, solo concede una vez más",
        date: "27 / Diciembre / 2019"
    }
} 


const JibakuShounenHanakoKun = () => {
    return (
        <main className="main-caps">
            <div className="container-info-list-e">
                <div className="info">
                    <div className="img-info">
                        <img src="https://i.ibb.co/x7gxY5p/Jibaku-shonen-hanako-kun-normal.jpg" alt="Jibaku Shounen Hanako-kun" />
                        <h2 className="status-finalizado">Finalizado</h2>
                    </div>
                    <div className="contenido-info small">
                        <h1>Jibaku Shounen Hanako-kun</h1>

                        <h3 className="informacion">
                            <span className="plataforma-upload">TV</span>
                            <span className="fecha-upload">2020</span>
                            <span className="temporada-upload">Temporada</span>
                            <span className="info-temporada-upload-invierno"><i className="far fa-snowflake"></i> Invierno 2020</span>
                        </h3>

                        <h3 className="generos">
                            <span id="comedia">Comedia</span>
                            <span id="escolar">Escolares</span>
                            <span id="shounen">Shounen</span>
                            <span id="sobrenatural">Sobrenatural</span>
                        </h3>

                        <p>
                        En la Academia Kamome, abundan los rumores sobre los llamados Siete Misterios de la escuela, uno de los cuales es Hanako-san. Se dice que si utilizas el tercer puesto del baño de mujeres del tercer piso en el viejo edificio de la escuela, Hanako-san te concederá cualquier deseo una vez la invoques. Nene Yashiro, una chica de preparatoria y estudiante de la Academia amante del ocultismo, se aventura a este baño encantado… ¡pero el Hanako-san que todos creían no tiene nada que ver con lo que imaginaban! ¡Resulta que Hanako-san en la Academia Kamome… es un niño!
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
                                    <img src="https://i.ibb.co/12gpsNH/Jibaku-shonen-hanako-kun-largo.jpg" alt="Jibaku Shounen Hanako-kun Cap. 1" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>Jibaku Shounen Hanako-kun <span className="episodio">Episodio 1</span></h2>
                                    <h3>"{nameCaps.Cap1.name}"</h3>
                                    <p>{nameCaps.Cap1.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "2"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/12gpsNH/Jibaku-shonen-hanako-kun-largo.jpg" alt="Jibaku Shounen Hanako-kun Cap. 2" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>Jibaku Shounen Hanako-kun <span className="episodio">Episodio 2</span></h2>
                                    <h3>"{nameCaps.Cap2.name}"</h3>
                                    <p>{nameCaps.Cap2.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "3"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/12gpsNH/Jibaku-shonen-hanako-kun-largo.jpg" alt="Jibaku Shounen Hanako-kun Cap. 3" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>Jibaku Shounen Hanako-kun <span className="episodio">Episodio 3</span></h2>
                                    <h3>"{nameCaps.Cap3.name}"</h3>
                                    <p>{nameCaps.Cap3.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "4"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/12gpsNH/Jibaku-shonen-hanako-kun-largo.jpg" alt="Jibaku Shounen Hanako-kun Cap. 4" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>Jibaku Shounen Hanako-kun <span className="episodio">Episodio 4</span></h2>
                                    <h3>"{nameCaps.Cap4.name}"</h3>
                                    <p>{nameCaps.Cap4.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "5"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/12gpsNH/Jibaku-shonen-hanako-kun-largo.jpg" alt="Jibaku Shounen Hanako-kun Cap. 5" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>Jibaku Shounen Hanako-kun <span className="episodio">Episodio 5</span></h2>
                                    <h3>"{nameCaps.Cap5.name}"</h3>
                                    <p>{nameCaps.Cap5.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "6"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/12gpsNH/Jibaku-shonen-hanako-kun-largo.jpg" alt="Jibaku Shounen Hanako-kun Cap. 6" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>Jibaku Shounen Hanako-kun <span className="episodio">Episodio 6</span></h2>
                                    <h3>"{nameCaps.Cap6.name}"</h3>
                                    <p>{nameCaps.Cap6.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "7"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/12gpsNH/Jibaku-shonen-hanako-kun-largo.jpg" alt="Jibaku Shounen Hanako-kun Cap. 7" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>Jibaku Shounen Hanako-kun <span className="episodio">Episodio 7</span></h2>
                                    <h3>"{nameCaps.Cap7.name}"</h3>
                                    <p>{nameCaps.Cap7.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "8"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/12gpsNH/Jibaku-shonen-hanako-kun-largo.jpg" alt="Jibaku Shounen Hanako-kun Cap. 8" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>Jibaku Shounen Hanako-kun <span className="episodio">Episodio 8</span></h2>
                                    <h3>"{nameCaps.Cap8.name}"</h3>
                                    <p>{nameCaps.Cap8.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "9"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/12gpsNH/Jibaku-shonen-hanako-kun-largo.jpg" alt="Jibaku Shounen Hanako-kun Cap. 9" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>Jibaku Shounen Hanako-kun <span className="episodio">Episodio 9</span></h2>
                                    <h3>"{nameCaps.Cap9.name}"</h3>
                                    <p>{nameCaps.Cap9.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "10"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/12gpsNH/Jibaku-shonen-hanako-kun-largo.jpg" alt="Jibaku Shounen Hanako-kun Cap. 10" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>Jibaku Shounen Hanako-kun <span className="episodio">Episodio 10</span></h2>
                                    <h3>"{nameCaps.Cap10.name}"</h3>
                                    <p>{nameCaps.Cap10.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "11"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/12gpsNH/Jibaku-shonen-hanako-kun-largo.jpg" alt="Jibaku Shounen Hanako-kun Cap. 11" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>Jibaku Shounen Hanako-kun <span className="episodio">Episodio 1</span></h2>
                                    <h3>"{nameCaps.Cap11.name}"</h3>
                                    <p>{nameCaps.Cap11.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "12"} className="link-lista">
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/12gpsNH/Jibaku-shonen-hanako-kun-largo.jpg" alt="Jibaku Shounen Hanako-kun Cap. 12" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>Jibaku Shounen Hanako-kun <span className="episodio">Episodio 12</span></h2>
                                    <h3>"{nameCaps.Cap12.name}"</h3>
                                    <p>{nameCaps.Cap12.date}</p>
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

export default JibakuShounenHanakoKun