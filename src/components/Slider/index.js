// Dependencies
import React from 'react'
import {Slideshow, Slide, TextoSlide } from '../Slideshow/Slideshow'
import { Link } from 'react-router-dom'

import img1 from './../img/1.jpg';
import img2 from './../img/2.jpg';
import img3 from './../img/3.jpg';
import img4 from './../img/4.jpg';

// URL LINK DIRECTO

const urlVerOpcion1 = "/ver/kimi_no_na_wa"
const urlVerOpcion2 = "/ver/koe_no_katachi";
//const urlVerOpcion3 = "/ver/X";
//const urlVerOpcion4 = "/ver/X";

// URL LISTADO CAPS

const urlAnimeOpcion1 = "/anime/mahou_shoujo_site";
const urlAnimeOpcion2 = "/anime/boku_no_hero";
//const urlAnimeOpcion3 = "/anime/X";
//const urlAnimeOpcion4 = "/anime/X";

// NAME ANIMES
const Anime1 = "Kimi no Na wa";
const Anime2 = "Koe no Katachi";
const Anime3 = "Mahou Shoujo Site";
const Anime4 = "Boku no Hero Academia";

// FRASE NORMAL
const frase = "Disfruta AHORA mismo de";

const Slider = () => {
  return (
    <main className="mainSlider">
        <h2 className="title-main"><i class="fas fa-plus"></i> Nuevos</h2>
      <Slideshow controles={true} autoplay={true} velocidad="500" intervalo="5000">
        <Slide>
            <Link to={urlVerOpcion1}>
              <img src={img1} alt={Anime1} />
            </Link>
            <TextoSlide>
              <p>¡{frase} <strong>{Anime1}</strong>!</p>
            </TextoSlide>
          </Slide>

          <Slide>
            <Link to={urlVerOpcion2}>
              <img src={img2} alt={Anime2} />
            </Link>
            <TextoSlide>
            <p>¡{frase} <strong>{Anime2}</strong>!</p>
            </TextoSlide>
          </Slide>

          <Slide>
            <Link to={urlAnimeOpcion1}>
              <img src={img3} alt={Anime3} />
            </Link>
            <TextoSlide>
            <p>¡{frase} <strong>{Anime3}</strong>!</p>
            </TextoSlide>
          </Slide>

          <Slide>
            <Link to={urlAnimeOpcion2}>
              <img src={img4} alt={Anime4} />
            </Link>
            <TextoSlide>
            <p>¡{frase} <strong>{Anime4}</strong>!</p>
            </TextoSlide>
          </Slide>
      </Slideshow>
    </main>    
  )
}

export default Slider