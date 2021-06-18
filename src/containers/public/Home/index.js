// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="main">
      <div className="container-ue">
        <div className="title">
          <h3 className="title-main"><i className="fas fa-fire"></i> Populares Ahora</h3>
        </div>
        <div id="todo">
        <Link to="/anime/boku_no_hero_academia_season_one" className="accion">
            <div class="background"></div>
            <div className="contenedor-contenido" id="BokunoHeroAcademiaSeasonOne">
              <div className="hover-interface">
                <div className="arrow-interface">
                  <i className="far fa-arrow-alt-circle-right"></i>
                </div>
              </div>
              <img loading="lazy" src="https://i.ibb.co/qWZshPk/boku-no-hero-season1-larga.jpg" class="imgPrincipal" title="Boku no Hero Academia" alt="Boku no Hero Academia" />
              <div className="title-contenido">
                <p>Boku no Hero Academia</p>
              </div>
            </div>
          </Link>

          <Link to="/anime/kimetsu_no_yaiba" className="accion">
            <div class="background"></div>
            <div className="contenedor-contenido">
              <div className="hover-interface">
                <div className="arrow-interface">
                  <i className="far fa-arrow-alt-circle-right"></i>
                </div>
              </div>
              <img loading="lazy" src="https://i.ibb.co/XXqHQH2/Kimetsu-no-yaiba-season1-largo.jpg" class="imgPrincipal" title="Kimetsu no Yaiba" alt="Kimetsu no Yaiba" />
              <div className="title-contenido">
                <p>Kimetsu no Yaiba</p>
              </div>
            </div>
          </Link>

          <Link to="/anime/kono_subarashii_sekai_ni_shukufuku_wo!" className="comedia">
            <div className="contenedor-contenido">
              <div className="hover-interface">
                <div className="arrow-interface">
                  <i className="far fa-arrow-alt-circle-right"></i>
                </div>
              </div>
              <img loading="lazy" src="https://i.ibb.co/7G2z3MR/Kono-Subarashii-Sekai-ni-Shukufuku-wo-season1-normal.jpg" title="Kono Subarashii Sekai ni Shukufuku wo!" alt="Kono Subarashii Sekai ni Shukufuku wo!" />
              <div className="title-contenido">
                <p>Kono Subarashii Sekai ni Shukufuku wo!</p>
              </div>
            </div>
          </Link>

          <Link to="/anime/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai" className="recuentosDeLaVida">
            <div class="background"></div>
            <div className="contenedor-contenido">
              <div className="hover-interface">
                <div className="arrow-interface">
                  <i className="far fa-arrow-alt-circle-right"></i>
                </div>
              </div>
              <img loading="lazy" src="https://i.ibb.co/gz1tt9V/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai-largo.jpg"  class="imgPrincipal" title="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" alt="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" />
              <div className="title-contenido">
                <p>Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai</p>
              </div>
            </div>
          </Link>

          <Link to="/anime/jibaku_shounen_hanako-kun" className="comedia">
            <div class="background"></div>
            <div className="contenedor-contenido">
              <div className="hover-interface">
                <div className="arrow-interface">
                  <i className="far fa-arrow-alt-circle-right"></i>
                </div>
              </div>
              <img loading="lazy" src="https://i.ibb.co/12gpsNH/Jibaku-shonen-hanako-kun-largo.jpg" class="imgPrincipal" title="Jibaku Shounen Hanako-kun" alt="Jibaku Shounen Hanako-kun" />
              <div className="title-contenido">
                <p>jibaku shōnen hanako-kun</p>
              </div>
            </div>
          </Link>

          <Link to="/anime/kono_subarashii_sekai_ni_shukufuku_wo!_2" className="comedia">
            <div class="background"></div>
            <div className="contenedor-contenido">
              <div className="hover-interface">
                <div className="arrow-interface">
                  <i className="far fa-arrow-alt-circle-right"></i>
                </div>
              </div>
              <img loading="lazy" src="https://i.ibb.co/Qdz12f9/Kono-Subarashii-Sekai-ni-Shukufuku-wo-season2-largo.jpg" class="imgPrincipal" title="Kono Subarashii Sekai ni Shukufuku wo!2" alt="Kono Subarashii Sekai ni Shukufuku wo!2" />
 <div class="title-contenido2">
                <p>Kono Subarashii Sekai ni Shukufuku wo! 2</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="container-ue">
        <div className="title">
          <h3 className="title-main"><i className="fas fa-rocket"></i> Nuevos Estrenos</h3>
        </div>
        <div className="contenido">
          <Link to="anime/ijiranaide_nagatoro-san" className="recuentosDeLaVida">
            <div class="background"></div>
            <div className="contenedor-contenido">
              <div className="hover-interface">
                <div className="arrow-interface">
                  <i className="far fa-arrow-alt-circle-right"></i>
                </div>
              </div>
              <img loading="lazy" src="https://i.ibb.co/Cn4tT5Z/Ijiranaide-nagatoro-san-largo.jpg" class="imgPrincipal" title="Ijiranaide, Nagatoro-san" alt="Ijiranaide, Nagatoro-san" />
              <div className="title-contenido">
                <p>Ijiranaide, Nagatoro-san</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Home
