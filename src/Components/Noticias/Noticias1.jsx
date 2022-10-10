import React from 'react'
import '../../Styles/noticias.css'
import '../../Helpers/main'
import '../../Helpers/scroll.js'
import 'bootstrap/dist/css/bootstrap.css';



import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Noticias = () => {

    return (
        <div
            data-aos="fade-up-right"
            className="tarjeta"
        >
            <section className='post-list'>
                <div className='content'>
                    <article className='post'>
                        <div className='post-header'>
                            <div className='post-img-1'>
                            </div>
                        </div>
                        <div className='post-body'>
                            <span>01 Octubre 2022</span>
                            <h2>MIRANDO A JESUCRISTO</h2>
                            <p className='descripcion'>
                                El pasado 15 de septiembre comenzó el curso de preparación a los votos
                                perpetuos en la Casa Madre, que se prolongará hasta el 15 de enero de 2023.
                            </p>
                            <a
                                href="https://www.consolacion.org/noticias/mirando-a-jesucristo#.Yzhq19LMKV4"
                                className="post-link"
                                title="MIRANDO A JESUCRISTO">
                                Leer Más...

                            </a>
                        </div>
                    </article>

                    <article className='post'>
                        <div className='post-header'>
                            <div className='post-img-2'></div>
                        </div>
                        <div className='post-body'>
                            <span>13 Septiembre 2022</span>
                            <h2>Visita del Gobierno Provincial a Eslovaquia</h2>
                            <p className='descripcion'>
                                Los días del 8 al 11 de septiembre las comunidades de Eslovaquia tuvimos la visita de las hermanas de nuestro Gobierno Provincial.
                            </p>
                            <a
                                href="https://www.consolacion.org/noticias/visita-del-gobierno-provincial-a-eslovaquia#.YzhqpNLMKV4"
                                className="post-link"
                                title="Visita del Gobierno Provincial a Eslovaquia">
                                Leer Más...
                            </a>
                        </div>
                    </article>
                    <article className='post'>
                        <div className='post-header'>
                            <div className='post-img-3'></div>
                        </div>
                        <div className='post-body'>
                            <span>20 Septiembre 2022</span>
                            <h2>Encuentro de jóvenes en formación para la VR</h2>
                            <p className='descripcion'>
                                "Contigo a todas partes"Con este lema, el sábado 17 de septiembre, un grupo de jóvenes que se preparan para la Vida Religiosa.
                            </p>
                            <a
                                href="https://www.consolacion.org/noticias/encuentro-de-jovenes-en-formacion-para-la-vr#.Yzhq9dLMKV4"
                                className="post-link"
                                title="Encuentro de jóvenes en formación para la VR">
                                Leer Más...
                            </a>
                        </div>
                    </article>
                </div>

            </section>
        </div>

    )
}

export default Noticias