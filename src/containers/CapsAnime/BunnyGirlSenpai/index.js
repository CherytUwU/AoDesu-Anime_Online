import React from 'react'
import { Link } from 'react-router-dom'

const urlCap = "/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap"
const nameCaps = {
    Cap1: {
        name: "La senpai es una conejita",
        date: "04 / Octubre / 2018"
    },
    Cap2: {
        name: "Siempre hay problemas en la primera cita",
        date: "11 / Octubre / 2018"
    },
    Cap3: {
        name: "Un mundo sin ti",
        date: "18 / Octubre / 2018"
    },
    Cap4: {
        name: "Los cerdos no tienen mañana",
        date: "25 / Octubre / 2018"
    },
    Cap5: {
        name: "Todas mis mentiras para ti",
        date: "01 / Noviembre / 2018"
    },
    Cap6: {
        name: "El mundo que elegiste",
        date: "08 / Noviembre / 2018"
    },
    Cap7: {
        name: "La juventud es una paradoja",
        date: "15 / Noviembre / 2018"
    },
    Cap8: {
        name: "Que la lluvia nocturna se lo lleve todo",
        date: "22 / Noviembre / 2018"
    },
    Cap9: {
        name: "Sister Panic",
        date: "29 / Noviembre / 2018"
    },
    Cap10: {
        name: "La juventud es una paradoja",
        date: "06 / Diciembre / 2018"
    },
    Cap11: {
        name: "La misión de Kaede",
        date: "13 / Diciembre / 2018"
    },
    Cap12: {
        name: "Vivo en un sueño del que no puedo despertar",
        date: "20 / Diciembre / 2018"
    },
    Cap13: {
        name: "El amanecer de una noche eterna",
        date: "27 / Diciembre / 2018"
    }
} 

const BunnyGirlSenpai = () => {
    return (
        <main className="main-caps">
            <div className="container-info-list-e">
                <div className="info">
                    <div className="img-info">
                        <img src="https://i.ibb.co/r5VW72X/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai-normal.jpg" alt="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" />
                        <h2 className="status-finalizado">Finalizado</h2>
                    </div>
                    <div className="contenido-info small">
                        <h1>Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai</h1>
                        
                            
                        <h3 className="informacion">
                          <span className="plataforma-upload">TV</span>
                          <span className="fecha-upload">2018</span>
                          <span className="temporada-upload">Temporada</span>
                          <span className="info-temporada-upload-invierno"><i class="far fa-snowflake"></i> Invierno 2018</span>
                        </h3>
                            
                        <h3 className="generos">
                          <span id="comedia">Comedia</span>
                          <span id="escolar">Escolar</span>
                          <span id="romance">Romance</span>
                        </h3>
                            
                        <p>
                          Síndrome de la pubertad: ciertas experiencias poco corrientes que se rumorea en Internet que son la causa del exceso de sensibilidad e inestabilidad durante la adolescencia. Este año, Sakuta Azusagawa, estudiante de segundo en una preparatoria cercana a Enoshima, conocerá a varias chicas que están pasando por ese "síndrome de la pubertad". Por ejemplo, en la biblioteca conoce a una salvaje chica conejito que resulta ser Mai Sakurajima, una chica mayor de su preparatoria que es una actriz que está tomándose un descanso. ¿El problema? Que nadie parece poder ver a esa chica tan encantadora, ¿cómo es posible? Mientras Sakuta busca respuestas para ayudar a Mai comienzan a forjar un vínculo y terminará descubriendo los sentimientos que la chica oculta en su corazón... Una historia que se sale de lo habitual y que se desarrolla en una ciudad con un luminoso cielo y un brillante océano donde Sakuta conocerá a varias chicas de lo más misteriosas e intrigantes.
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
                        <Link to={urlCap + "1"} className="link-lista" >  
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/gz1tt9V/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai-largo.jpg" alt="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>
                                        Bunny Girl Senpai <span className="episodio">Episodio 1</span>
                                    </h2>
                                    <h3>"{nameCaps.Cap1.name}"</h3>
                                    <p>{nameCaps.Cap1.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "2"} className="link-lista" >
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/gz1tt9V/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai-largo.jpg" alt="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>
                                        Bunny Girl Senpai <span className="episodio">Episodio 2</span>
                                    </h2>
                                    <h3>"{nameCaps.Cap2.name}"</h3>
                                    <p>{nameCaps.Cap2.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "3"} className="link-lista" >
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/gz1tt9V/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai-largo.jpg" alt="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>
                                        Bunny Girl Senpai <span className="episodio">Episodio 3</span>
                                    </h2>
                                    <h3>"{nameCaps.Cap3.name}"</h3>
                                    <p>{nameCaps.Cap3.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "4"} className="link-lista" >
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/gz1tt9V/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai-largo.jpg" alt="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>
                                        Bunny Girl Senpai <span className="episodio">Episodio 4</span>
                                    </h2>
                                    <h3>"{nameCaps.Cap4.name}"</h3>
                                    <p>{nameCaps.Cap4.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "5"} className="link-lista" >
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/gz1tt9V/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai-largo.jpg" alt="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>
                                        Bunny Girl Senpai <span className="episodio">Episodio 5</span>
                                    </h2>
                                    <h3>"{nameCaps.Cap5.name}"</h3>
                                    <p>{nameCaps.Cap5.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "6"} className="link-lista" >
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/gz1tt9V/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai-largo.jpg" alt="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>
                                        Bunny Girl Senpai <span className="episodio">Episodio 6</span>
                                    </h2>
                                    <h3>"{nameCaps.Cap6.name}"</h3>
                                    <p>{nameCaps.Cap6.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "7"} className="link-lista" >
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/gz1tt9V/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai-largo.jpg" alt="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>
                                        Bunny Girl Senpai <span className="episodio">Episodio 7</span>
                                    </h2>
                                    <h3>"{nameCaps.Cap7.name}"</h3>
                                    <p>{nameCaps.Cap7.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "8"} className="link-lista" >
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/gz1tt9V/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai-largo.jpg" alt="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>
                                        Bunny Girl Senpai <span className="episodio">Episodio 8</span>
                                    </h2>
                                    <h3>"{nameCaps.Cap8.name}"</h3>
                                    <p>{nameCaps.Cap8.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "9"} className="link-lista" >
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/gz1tt9V/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai-largo.jpg" alt="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>
                                        Bunny Girl Senpai <span className="episodio">Episodio 9</span>
                                    </h2>
                                    <h3>"{nameCaps.Cap9.name}"</h3>
                                    <p>{nameCaps.Cap9.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "10"} className="link-lista" >
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/gz1tt9V/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai-largo.jpg" alt="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>
                                        Bunny Girl Senpai <span className="episodio">Episodio 10</span>
                                    </h2>
                                    <h3>"{nameCaps.Cap10.name}"</h3>
                                    <p>{nameCaps.Cap10.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "11"} className="link-lista" >
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/gz1tt9V/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai-largo.jpg" alt="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>
                                        Bunny Girl Senpai <span className="episodio">Episodio 11</span>
                                    </h2>
                                    <h3>"{nameCaps.Cap11.name}"</h3>
                                    <p>{nameCaps.Cap11.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "12"} className="link-lista" >
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/gz1tt9V/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai-largo.jpg" alt="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>
                                        Bunny Girl Senpai <span className="episodio">Episodio 12</span>
                                    </h2>
                                    <h3>"{nameCaps.Cap12.name}"</h3>
                                    <p>{nameCaps.Cap12.date}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>

                        <Link to={urlCap + "13"} className="link-lista" >
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/gz1tt9V/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai-largo.jpg" alt="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>
                                        Bunny Girl Senpai <span className="episodio">Episodio 13</span>
                                    </h2>
                                    <h3>"{nameCaps.Cap13.name}"</h3>
                                    <p>{nameCaps.Cap13.date}</p>
                                </div>
                            </div>
                        </Link>

                        
                    </div>
                    <div className="list-arrow">
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BunnyGirlSenpai