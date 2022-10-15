import React from 'react'
import { Link } from 'react-router-dom'

import '../../Styles/noticias.css'
import '../../Helpers/main'
import '../../Helpers/scroll.js'
import 'bootstrap/dist/css/bootstrap.css';


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Noticias = () => {
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
                                href="/noticias1"
                            >
                                <div className='post-img-1'></div>
                            </a>

                        </div>
                        <div className='post-body'>
                            <span>01 Octubre 2022</span>
                            <h2>MIRANDO A JESUCRISTO</h2>
                            <p className='descripcion'>
                                El pasado 15 de septiembre comenzó el curso de preparación a los votos
                                perpetuos en la Casa Madre, que se prolongará hasta el 15 de enero de 2023.
                            </p>
                            <a
                                href="/noticias1"
                                className="post-link"
                                title="MIRANDO A JESUCRISTO">
                                Leer Más...

                            </a>
                            <Link
                                to="/noticias1">
                            </Link>
                        </div>
                    </article>

                    <article className='post'>
                        <div className='post-header'>

                            <a
                                href="/noticias2"
                            >
                                <div className='post-img-2'></div>
                            </a>

                        </div>
                        <div className='post-body'>
                            <span>13 Septiembre 2022</span>
                            <h2>Visita del Gobierno Provincial a Eslovaquia</h2>
                            <p className='descripcion'>
                                Los días del 8 al 11 de septiembre las comunidades de Eslovaquia tuvimos la visita de las hermanas de nuestro Gobierno Provincial.
                            </p>
                            <a
                                href="/noticias2"
                                className="post-link"
                                title="Visita del Gobierno Provincial a Eslovaquia">
                                Leer Más...
                            </a>
                            <Link
                                to="/noticias2">
                            </Link>
                        </div>
                    </article>
                    <article className='post'>
                        <a
                            href="/noticias3"
                        >
                            <div className='post-img-3'></div>
                        </a>
                        <div className='post-body'>
                            <span>20 Septiembre 2022</span>
                            <h2>Encuentro de jóvenes en formación para la VR</h2>
                            <p className='descripcion'>
                                "Contigo a todas partes"Con este lema, el sábado 17 de septiembre, un grupo de jóvenes que se preparan para la Vida Religiosa.
                            </p>
                            <a
                                href="/noticias3"
                                className="post-link"
                                title="Encuentro de jóvenes en formación para la VR">
                                Leer Más...

                            </a>
                            <Link
                                to="/noticias3">
                            </Link>
                        </div>
                    </article>
                </div>

            </section>
        </div>

    )
}

export default Noticias