import React from 'react'
import { Link } from 'react-router-dom'

const devNotes = () => {
    return (
        <main className="main-devnotes">
            <div className="centrador">
                <div className="contenido-indexado">
                    <h1>Tabla de Contenido</h1>
                    <ul>
                        <li><a href="#opcion1">Cambios a los animes</a></li>
                        <li><a href="#opcion2">Cambios a la pagina (Codigo Interno)</a></li>
                        <li><a href="#opcion3">Mala Noticia :(</a></li>
                    </ul>
                </div>

                <div className="contenido-devnotes">

                    <div>
                        <p>Hola a todos! es mi primera vez haciendo estas cosas... Pero en esta <span className="text-resaltado">UPDATE</span> les traigo 2 Animes Nuevos a la pagina, y estoy muy emocionado de mostrarselos, ademas, una triste noticia en el final del post :(</p>
                    </div>
                    
                    <div>
                        <h1>Notas de la versión 1.0</h1>
                        <h2 id="opcion1">1. Cambios a los animes</h2>
                            <h3>¡Nuevos Animes!</h3>
                                <ul>
                                    <li><Link to="/anime/jibaku_shounen_hanako-kun">Jibaku Shounen Hanako-kun</Link></li>
                                    <li><Link to="/anime/boku_no_hero_academia_season_one">Boku no Hero Academia Season 1</Link></li>
                                </ul>

                        <h2 id="opcion2">2. Cambios a la pagina (Codigo Interno)</h2>
                        <ul>
                            <li>Mejora de carga</li>
                            <li>Agregadas nuevos identificadores de categorias (muy pronto filtro)</li>
                            <li>Agregada opcion de Notas de versión (Esta misma pagina)</li>
                        </ul>

                        <h2 id="opcion3">3. Malas Noticias</h2>
                            <p>Asi es, has llegado al final del post, tal vez no sea mucho, y tal vez no mucha gente lo vea, pero muy pronto me ire por un tiempo, y dejare de subir animes y actualizar la pagina, es una mala noticia, pero cuando vuelva, volvere con todo!</p>
                            <p>Un Fuerte Abrazo para todo aquel que lea esto, Nos vemos en la próxima, con cariño</p>
                            <span class="autor"><p>-Cheryt</p></span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default devNotes