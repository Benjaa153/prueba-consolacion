import React from 'react'
import Header from '../Header'
import '../../Styles/NoticiasIndividuales/NoticiasIndividuales.scss'

const Noticia3_1 = () => {
    return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <article className="blog-card">
                            <div className="blog-card__background">
                                <div className="card__background--wrapper">
                                    <div className="card__background--main img-noticia7"
                                    >
                                        <div className="card__background--layer"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-card__head">
                                <span className="date__box">
                                    <span className="date__day">27</span>
                                    <span className="date__month">Noviembre 2022</span>
                                </span>
                            </div>
                            <div className="blog-card__info">
                                <h5>Sabado de un Nuevo Reencuentro</h5>
                                <p>
                                    <a href="#" className="icon-link mr-3"><i className="fa fa-pencil-square-o"></i></a>
                                    <a href="#" className="icon-link"><i className="fa fa-comments-o"></i> </a>
                                </p>
                                <p className="blog-parrafo-p">
                                    Una vez más, el patio y la Capilla de nuestro colegio recibieron la visita de ex alumnas. Esta vez le tocó el turno a los corazones agradecidos de la PROMO 2000.
                                    Participaron de una misa de Acción de Gracias y luego recorrieron las aulas que las cobijaron.
                                    ¡No faltaron las  fotos en la escalera y junto al Sagrado Corazón!
                                    ¡Felicitaciones!!


                                </p>
                                <a href="/" className="btn btn--with-icon"><i className="btn-icon fa fa-long-arrow-right"></i>Volver</a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            <section className="detail-page">
                <div className="container mt-5">

                </div>
            </section>
        </div>
    )
}

export default Noticia3_1