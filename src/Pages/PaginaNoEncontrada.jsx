import React from 'react'
import '../Styles/paginaNoEncontrada.css'
import Header from './Header'
const PaginaNoEncontrada = () => {
    return (
        <>
            <Header/>
            <section className='page_404'>
                <div className='container-page'>
                    <div className='row-page'>
                        <div className='col-sm-12'>
                            <div className='col-sm-10 col-sm-offset-1 text-center'>
                                <div className='four_zero_four_bg'>
                                    <h1 className='h1-text'>404</h1>
                                </div>
                                <div className='contant_box_404'>
                                    <h3 className='h2-page'>Parece que estás perdido</h3>
                                    <p>¡La página que buscas no está disponible!</p>
                                    <a href='/' className='link_404'>Volver al Inicio</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PaginaNoEncontrada