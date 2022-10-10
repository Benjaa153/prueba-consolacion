import React from 'react'
import { Link } from 'react-router-dom'

import '../../Styles/noticias.css'
import '../../Helpers/main'
import '../../Helpers/scroll.js'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Noticias2 = () => {
    return (
        <div
            data-aos="fade-up-right"
            className="tarjeta"
        >
            <section className='post-list'>
                <div className='content'>
                    <article className='post'>
                        <div className='post-header'>
                            <div className='post-img-4'>
                            </div>
                        </div>
                        <div className='post-body'>
                            <span>28 Septiembre 2022</span>
                            <h2>VI Jornada Nacional de la juventud en Loja (Ecuador)</h2>
                            <p className='descripcion'>
                                Del 23 al 25 de septiembre, se llevó a cabo la VI Jornada Nacional de la juventud en Loja Ecuador, con el lema: “María se levantó y partió sin demora” Lc 1,39

                            </p>
                            <a
                                href="/noticias4"
                                className="post-link"
                                title="VI Jornada Nacional de la juventud en Loja ">
                                Leer Más...

                            </a>
                            <Link
                                to="/noticias4">
                            </Link>
                        </div>
                    </article>

                    <article className='post'>
                        <div className='post-header'>
                            <div className='post-img-5'></div>
                        </div>
                        <div className='post-body'>
                            <span>13 Septiembre 2022</span>
                            <h2>MÊS DAS PROFISSÕES COM OS PEQUENOS</h2>
                            <p className='descripcion'>
                                O plano das actividades da acção social propõe de falar das profissões todo o mês de Agosto com o objectivo que as crianças vejam e conheçam várias profissões.
                            </p>
                            <a
                                href="/noticias5"
                                className="post-link"
                                title="MÊS DAS PROFISSÕES COM OS PEQUENOS">
                                Leer Más...
                            </a>
                            <Link
                                to="/noticias5">
                            </Link>
                        </div>
                    </article>
                    <article className='post'>
                        <div className='post-header'>
                            <div className='post-img-6'></div>
                        </div>
                        <div className='post-body'>
                            <span>13 Septiembre 2022</span>
                            <h2>CLOSING OF THE FRATERNAL VISIT TO THE DELEGATION OF ASIA</h2>
                            <p className='descripcion'>
                                On September 11 Sr. Antonia Munuera Alemán our General Superior and Sr. Aránzazu Palau- General Secretary closed the Fraternal Visit to the Delegation of Asia
                            </p>
                            <a
                                href="/noticias6"
                                className="post-link"
                                title="CLOSING OF THE FRATERNAL VISIT TO THE DELEGATION OF ASIA">
                                Leer Más...
                            </a>
                            <Link
                                to="/noticias6">
                            </Link>
                        </div>
                    </article>
                </div>

            </section>
        </div>

    )
}

export default Noticias2