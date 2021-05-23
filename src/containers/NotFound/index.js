// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const NotFound = () => {
  return (
    <div>
      <Header />

      <main className="main-error">
        <div className="container-404">
          <img src="https://i.ibb.co/7GCbQLt/ERROR.png" alt="" />
        </div>
        <div className="link-error">
          <Link to="/">Volver Al Inicio</Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default NotFound
