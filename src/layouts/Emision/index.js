// Dependencies
import React from 'react'

// Components
//import DashboardHeader from '../../components/DashboardHeader'
//import Sidebar from '../../components/Sidebar'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Emision = ({children}) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Emision
