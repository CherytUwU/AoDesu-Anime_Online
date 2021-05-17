// Dependencies
import React from 'react'

// Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const AnimeLayout = ({children}) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default AnimeLayout
