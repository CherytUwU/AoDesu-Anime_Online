// Dependencias 
import React from 'react'

// Componentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const CapsAnimeLayout = ({children}) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default CapsAnimeLayout