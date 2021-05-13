import React, {useRef, useEffect, useCallback} from 'react';
import {ReactComponent as FlechaIzquierda} from './../img/flecha-izquierda.svg';
import {ReactComponent as FlechaDerecha} from './../img/flecha-derecha.svg';
import styled from 'styled-components';


const Slideshow = ({
        children,
        controles = false, 
        autoplay  = false, 
        velocidad="500", 
        intervalo="5000"
    }) => {

    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);

    const siguiente = useCallback(() => {
        // COMPROBAMOS QUE EL SLIDESHOW TENGA ELEMENTOS
        if(slideshow.current.children.length > 0){
            // OBTENEMOS EL PRIMER ELEMENTO DEL SLIDESHOW
            const primerElemento = slideshow.current.children[0];

            // ESTABLECEMOS LA TRANSICION PARA EL SLIDESHOW
            slideshow.current.style.transition = `${velocidad}ms ease-out all`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth;

            //MOVEMOS EL SLIDESHOW
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            const transicion = () => {
                // REINICIAMOS LA POSICION DEL SLIDE SHOW
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                // TOMAMOS EL PRIMER ELEMENTO Y LO MANDAMOS AL FINAL
                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener('transitionend', transicion)
            }     
            
            // EVENT LISTENER PARA CUANDO TERMINA LA TRANSICION
            slideshow.current.addEventListener('transitionend', transicion);
        }
    }, [velocidad]);
    
    const anterior = () => {
        console.log('Anterior')
        if(slideshow.current.children.length > 0){
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

            slideshow.current.style.transition = 'none';
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = `${velocidad}ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    }

    useEffect(() => {
        if(autoplay){
            intervaloSlideshow.current = setInterval(() => {
                siguiente();
            }, intervalo)
    
            // ELIMINAMOS INTERVALOS
            slideshow.current.addEventListener('mouseenter', () => {
                clearInterval(intervaloSlideshow.current);
            });
    
            // REANUDAMOS PARA CUANDO SE QUITE EL CURSOR 
            slideshow.current.addEventListener('mouseleave', () => {
                intervaloSlideshow.current = setInterval(() => {
                    siguiente();
                }, intervalo)
            });
        }
        
    }, [autoplay, intervalo, siguiente]);

    return (
      <ContenedorPrincipal>
           <ContenedorSlideshow ref={slideshow}>
                {children}
            </ContenedorSlideshow>
            {controles && <Controles>
                <Boton onClick={anterior}>
                    <FlechaIzquierda />
                </Boton>
                <Boton derecho onClick={siguiente}>
                    <FlechaDerecha />
                </Boton>
            </Controles>}
            
      </ContenedorPrincipal> 
    );
}

const ContenedorPrincipal = styled.div`
    position: relative;
`;

const ContenedorSlideshow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 9;
    max-height: 500px;
    position: relative;

    img{
        width: 100%;
        vertical-align: top;
    }
`;

const TextoSlide = styled.div`
    background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0, 0, 0, .3)'};
    color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
    width: 100%;
    padding: 10px 60px;
    text-align: center;
    position: absolute;
    bottom: 0px;

    @media screen and (max-width: 700px){
        position: relative;
        background: gray;
    }
`;

const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

const Boton = styled.button`
    pointer-events: all;
    background: rgba(0, 0, 0, .05);
    border: none;
    outline: none;
    cursor: pointer;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    &:hover{
        background: rgba(0, 0, 0, .15);
    }

    path {
        filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'}
    }

    ${props => props.derecho ? 'right: 0': 'left: 0'}
`;

export {Slideshow, Slide, TextoSlide};