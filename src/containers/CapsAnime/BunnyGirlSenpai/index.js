import React from 'react'
import { Link } from 'react-router-dom'

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
                        
                            
                        <h3 class="informacion">
                          <span className="plataforma-upload">TV</span>
                          <span className="fecha-upload">2018</span>
                          <span className="temporada-upload">Temporada</span>
                          <span className="info-temporada-upload-invierno"><i class="far fa-snowflake"></i> Invierno 2018</span>
                        </h3>
                            
                        <h3 className="generos">
                          <span>Comedia</span>
                          <span>Escolar</span>
                          <span>Romance</span>
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
                        <Link to="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap1" className="link-lista" >
                            <div className="contenido-listado">
                                <div className="img-listado">
                                    <img src="https://i.ibb.co/gz1tt9V/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai-largo.jpg" alt="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" />
                                </div>
                                <div className="titulo-listado">
                                    <h2>
                                        Bunny Girl Senpai <span className="episodio">Episodio 1</span>
                                    </h2>
                                    <h3>"La senpai es una conejita"</h3>
                                    <p>04 / Octubre / 2018</p>
                                </div>
                            </div>
                        </Link>

                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BunnyGirlSenpai