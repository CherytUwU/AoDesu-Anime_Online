import React from 'react'
import { Link } from 'react-router-dom'

const Recomendados = () => {
    return (
        <div className="recomendados">
            <h1><i className="fas fa-heart"></i> Recomendados</h1>
            <Link to="" className="link-recomendados">
                <div className="content-recomendados">
                    <img src="https://i.ibb.co/svtTy3W/Kono-Subarashii-Sekai-ni-Shukufuku-wo-season1-largo.jpg" alt="Kono Subarashii Sekai ni Shukufuku wo!" />
                    <h2>Kono Subarashii Sekai ni Shukufuku wo!</h2>
                    <p>2016</p>
                </div>
            </Link>

            <Link to="" className="link-recomendados">
                <div className="content-recomendados">
                    <img src="https://i.ibb.co/12gpsNH/Jibaku-shonen-hanako-kun-largo.jpg" alt="Jibaku Shounen Hanako-kun" />
                    <h2>Jibaku Shounen Hanako-kun</h2>
                    <p>2016</p>
                </div>
            </Link>

            <Link to="" className="link-recomendados">
                <div className="content-recomendados">
                    <img src="https://i.ibb.co/Cn4tT5Z/Ijiranaide-nagatoro-san-largo.jpg" alt="Ijiranaide, Nagatoro-san" />
                    <h2>Ijiranaide, Nagatoro-san</h2>
                    <p>2021</p>
                </div>
            </Link>


        </div>
    )
}

export default Recomendados