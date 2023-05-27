import React from 'react'
import Header from '../Pages/Header'
import '../Styles/documentos.scss'

const Documentos = () => {
    return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <article className="blog-card">
                            <div className="blog-card__background">
                                <div className="card__background--wrapper">
                                </div>
                            </div>
                            <div className="blog-card__head">
                                <span className="date__box">
                                    <span className="date__day">Documentos</span>
                                    <span className="date__month">Categorias</span>
                                </span>
                            </div>
                            <div className="blog-card__info">
                                <a href="http://">-Rasgos escenciales del Carisma</a><br></br><br></br>
                                <a href="http://">-Código Ético</a><br></br><br></br>
                                <a href="http://">-Seminario Dimensión Social Carisma</a><br></br><br></br>
                                <a href="http://">-Identidad Corporativa</a><br></br><br></br>
                                <a href="http://">-Movimiento COM</a><br></br><br></br>
                                <a href="http://">-Libros PDF</a><br></br><br></br>
                                <a href="http://">-Canonización Santa Mª Rosa Molas</a><br></br><br></br>
                                <a href="http://">-Novenas Sta. Mª Rosa Molas</a><br></br><br></br>
                                <a href="http://">-Lectio aina</a><br></br><br></br>
                                <a href="http://">-Novenas María Madre de Consolación</a><br></br><br></br>
                                <a href="http://">-Retiros</a>
                                <p>
                                    <a href="#" className="icon-link mr-3"><i className="fa fa-pencil-square-o"></i></a>
                                    <a href="#" className="icon-link"><i className="fa fa-comments-o"></i> </a>
                                </p><br></br>
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

export default Documentos