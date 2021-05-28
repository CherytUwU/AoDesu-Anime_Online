// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="container-content-footer">
          <h2 className="titulo-footer">Nuestras Redes</h2>
          <div className="container-redes">
            <a href="https://www.facebook.com/AoDesu-Anime-Online-Desu-105044395100028/?hc_ref=ARQJ9No8lljcEshkoCwSOZ0k2FiQ8zIAVyfuCBrXrVfuN3SuJjk4JnvK7bnwNos8jT4&fref=nf&__xts__[0]=68.ARCtwAmkTp_CSW-HjfFMYz0iWFLqsH52MV5NYPM0Xdlj1ESvLIIU906HLPtOImKWiHpJ-V6VsKWZqF59YSjd50dJ6sdRFCnGDp6xeF_v9GDnPnSCHJsvqVET1nkEGGGsdklVKquYyXqXQmiaQ-zibY47O88MhDjkGewIxlGjbRorz-xPeVHRHOA3u8n09Er2GDerV4qGZCmATnAN4Dij-Cw1OB_Een6jeUhy0xmK3Sb9FtcswEbZMJ3HO0AXT7EXXafB2pzUOOSAFei2blWvdpYZR8yHogg0Zi6Bg1y8wXiIHeQ&__tn__=kC-R" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook" data-title="Facebook"></i>
            </a>
            <a href="https://github.com/CherytUwU/AoDesu-Anime_Online" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github " data-title="Git Hub"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCBdiFpAYx6mI_hJw8oLFNcQ" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube" data-title="Youtube"></i>
            </a>
            <a href="https://twitter.com/DesuAo" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>

          <div className="container-redes">
            <Link to="/notas-version">Notas de la versión RAlpha 1.0</Link>
          </div>
        </div>

        <div className="container-content-footer">
          <h2 className="titulo-footer">AoDesu&copy; Derechos Reservados</h2>
          <div className="support-text">
            <h2>¿Tienes algun problema? ¡Contáctanos!</h2>
            <p>
              <span className="correo-c">AnimeOnlineDesu@gmail.com</span> 
              <span><a href="mailto:AnimeOnlineDesu@gmail.com">Enviar Correo</a></span>
            </p>
            <img src="https://i.ibb.co/tMqwRz4/Logo-Full-Screen300x300-Texto-Azul.png" alt="AoDesu" class="AoDesu" data-title="AoDesu" title="AoDesu" />
          </div>
        </div>

        <div className="container-content-footer">
          <h2 className="titulo-footer">Programadores</h2>
          <div className="container-img">
            <a href="https://github.com/CherytUwU" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ibb.co/YfHT88N/cherytb.png" alt="CherytUwU" class="img-git" title="Cheryt"/>
            </a>
            <a href="https://github.com/mononeitTY" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ibb.co/7GXF25N/monoe.png" alt="Monoe" class="img-git" title="Monoe"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
