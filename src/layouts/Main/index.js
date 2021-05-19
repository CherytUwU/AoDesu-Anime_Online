// Dependencies
import React from 'react'

// Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Slider from '../../components/Slider'
import btnSwitch from '../../components/Scripts'

const MainLayout = ({children}) => {
  return (
    <div>
      <Header />
      <main>
        <Slider />
        {children}
        </main>
      <Footer /> 
    </div>
  )
}

export default MainLayout
