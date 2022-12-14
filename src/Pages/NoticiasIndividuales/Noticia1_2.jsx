import React from 'react'
import Header from '../Header'
import '../../Styles/NoticiasIndividuales/NoticiasIndividuales.scss'


const Noticia1_2 = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <article className="blog-card">
              <div className="blog-card__background">
                <div className="card__background--wrapper">
                  <div className="card__background--main img-noticia2"
                  >
                    <div className="card__background--layer"></div>
                  </div>
                </div>
              </div>
              <div className="blog-card__head">
                <span className="date__box">
                  <span className="date__day">10</span>
                  <span className="date__month">Octubre 2022</span>
                </span>
              </div>
              <div className="blog-card__info">
                <h5>Visita del Gobierno Provincial a Eslovaquia</h5>
                <p>
                  <a href="#" className="icon-link mr-3"><i className="fa fa-pencil-square-o"></i></a>
                  <a href="#" className="icon-link"><i className="fa fa-comments-o"></i> </a>
                </p>
                <p className="blog-parrafo-p">

                  Los días del 8 al 11 de septiembre las comunidades de Eslovaquia tuvimos la visita de las hermanas de nuestro Gobierno Provincial. Una visita para compartir de cerca nuestra misión y nuestras preocupaciones, nuestros proyectos y conversar entre hermanas . Fueron unos días intensos de compartir en confianza y fraternidad. Las hermanas pudieron conocer el lugar, compaňeros y destinatarios de nuestra misión,  lo que hizo que nuestra reunión sobre el futuro de nuestras comunidades en Eslovaquia pudiera ser algo más encarnado y cercano para todas.

                  Damos gracias al Seňor por la oportunidad de poder encontrarnos y asi seguir fortaleciendo y renovando nuestro sentido de pertenencia.

                  En  nuestro corazón queda el deseo de seguir enriqueciendo nuestro Carisma con lo que vivimos en estas tierras Eslovacas dejándonos mirar por Él para que siendo sus instrumentos podamos seguir  llevando la Consolación a todos los que comparten con nosotras nuestro día a día.

                </p>
                <br></br>
                <br></br>
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

export default Noticia1_2