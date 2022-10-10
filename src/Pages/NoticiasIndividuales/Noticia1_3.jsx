import React from 'react'
import Header from '../Header'
import '../../Styles/NoticiasIndividuales/NoticiasIndividuales.scss'

const Noticia1_3 = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <article className="blog-card">
              <div className="blog-card__background">
                <div className="card__background--wrapper">
                  <div className="card__background--main img-noticia3"
                  >
                    <div className="card__background--layer"></div>
                  </div>
                </div>
              </div>
              <div className="blog-card__head">
                <span className="date__box">
                  <span className="date__day">20</span>
                  <span className="date__month">Septiembre 2022</span>
                </span>
              </div>
              <div className="blog-card__info">
                <h5>Encuentro de jóvenes en formación para la VR</h5>
                <p>
                  <a href="#" className="icon-link mr-3"><i className="fa fa-pencil-square-o"></i> Contigo a todas partes</a>
                  <a href="#" className="icon-link"><i className="fa fa-comments-o"></i> </a>
                </p>
                <p className="blog-parrafo-p">

                  Con este lema, el sábado 17 de septiembre, un grupo de jóvenes que se preparan para la Vida Religiosa en la Congregación de Hermanas de Ntra. Sra. de la Consolación, compartieron un encuentro on line, lleno de entusiasmo y alegría.

                  Aspirantes, postulantes y novicias de las Provincias María Rosa Molas y Los Andes se encontraron para vivir este espacio de formación. En esta oportunidad, también estuvo presente Marta, novicia de la Provincia de Europa.

                  "Desde la experiencia de María Teresa González Justo, en el año jubilar, vivimos un espacio de escucha profunda para compartir la experiencia de Jesús y animarnos en su seguimiento. Confiamos a la intercesión de María, Madre de Consolación, todo lo experimentado a partir del compartir cercano, sencillo y lleno de las huellas de Jesús en cada historia personal. Que María Teresa, nos siga ayudando a ahondar en nuestro llamado a ser consolación, desde la alegría y la generosidad en el sí de cada día".

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

export default Noticia1_3