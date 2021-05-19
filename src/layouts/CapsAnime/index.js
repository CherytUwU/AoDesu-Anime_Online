// Dependencias 
import React from 'react'

// Componentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Recomendados from '../../components/Recomendados'

const CapsAnimeLayout = ({children}) => {
    return (
        <div>
            <Header />
            <main>
                {children}
                <Recomendados />
            </main>
            <Footer />
        </div>
    )
}

export default CapsAnimeLayout