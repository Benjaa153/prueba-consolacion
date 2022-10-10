import React from 'react'
import Header from './Pages/Header'
import Banners from './Components/Banners'
import Noticias1 from './Components/Noticias/Noticias1'
import Noticias2 from './Components/Noticias/Noticias2'
import Actualidad from './Components/Actualidad'
import Multimedia from './Components/Multimedia'
import Footer from './Pages/Footer'

const PaginaPrincipal = () => {
    return (
        <div>
            <Header />
            <Banners />
            <Noticias1 />
            <Noticias2 />
            <Actualidad />
            <Multimedia />
            <Footer />
        </div>
    )
}

export default PaginaPrincipal