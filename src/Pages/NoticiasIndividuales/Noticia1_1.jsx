import React from 'react'
import Header from '../Header'
import '../../Styles/NoticiasIndividuales/NoticiasIndividuales.scss'

const Noticia1_1 = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <article className="blog-card">
              <div className="blog-card__background">
                <div className="card__background--wrapper">
                  <div className="card__background--main img-noticia1"
                  >
                    <div className="card__background--layer"></div>
                  </div>
                </div>
              </div>
              <div className="blog-card__head">
                <span className="date__box">
                  <span className="date__day">01</span>
                  <span className="date__month">Octubre 2022</span>
                </span>
              </div>
              <div className="blog-card__info">
                <h5>MIRANDO A JESUCRISTO</h5>
                <p>
                  <a href="#" className="icon-link mr-3"><i className="fa fa-pencil-square-o"></i></a>
                  <a href="#" className="icon-link"><i className="fa fa-comments-o"></i> </a>
                </p>
                <p className="blog-parrafo-p">

                  El pasado 15 de septiembre comenzó el curso de preparación a los votos perpetuos en la Casa Madre, que se prolongará hasta el 15 de enero de 2023.
                  Lee Eun Yeon (Gracia), de Corea del Sur.; Honorine Assidenou, de Togo; Atalia Lidia Mocumbe, de Mozambique; Alice Pagblguem, de Burkina Faso; Sonia M. T. Convolbo, de Burkina Faso; Antonia Mª Cabello Montoro, de España compartirán vida y formación a lo largo de estos meses. El lema que sirve de hiloconductor a este encuentro es: Mirando a Jesucristo.

                  Os pedimos una oración especial por los EE de mes que comienzan el día 1 de octubre en Javier, Pamplona.
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

export default Noticia1_1