import React from 'react'
import { Link } from 'react-router-dom'

import '../../Styles/noticias.css'

import '../../Helpers/main'
import '../../Helpers/scroll.js'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Noticias3 = () => {
    AOS.init();
    return (
        <div
            data-aos="fade-up-right"
            className="tarjeta"
            duration="5000"
        >
            <section className='post-list'>
                <div className='content'>
                    <article className='post'>
                        <div className='post-header'>

                            <a
                                href="/noticias7"
                            >
                                <div className='post-img-7'></div>
                            </a>

                        </div>
                        <div className='post-body'>
                            <span>27 Octubre 2022</span>
                            <h2>Sabado de un Nuevo Reencuentro</h2>
                            <p className='descripcion'>
                            Una vez más, el patio y la Capilla de nuestro colegio recibieron la visita de ex alumnas. le tocó el turno a los corazones agradecidos de la PROMO 2000. 
                            </p>
                            <a
                                href="/noticias7"
                                className="post-link"
                                title="VI Jornada Nacional de la juventud en Loja ">
                                Leer Más...

                            </a>
                            <Link
                                to="/noticias7">
                            </Link>
                        </div>
                    </article>

                   
                </div>
            </section>
        </div>

    )
}

export default Noticias3