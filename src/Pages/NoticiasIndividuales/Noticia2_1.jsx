import React from 'react'
import Header from '../Header'
import '../../Styles/NoticiasIndividuales/NoticiasIndividuales.scss'
const Noticia2_1 = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <article className="blog-card">
              <div className="blog-card__background">
                <div className="card__background--wrapper">
                  <div className="card__background--main img-noticia4"
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
                <h5>VI Jornada Nacional de la juventud en Loja (Ecuador)</h5>
                <p>
                  <a href="#" className="icon-link mr-3"><i className="fa fa-pencil-square-o"></i></a>
                  <a href="#" className="icon-link"><i className="fa fa-comments-o"></i> </a>
                </p>
                <p className="blog-parrafo-p">
                  Del 23 al 25 de septiembre, se llevó a cabo la VI Jornada Nacional de la juventud en Loja Ecuador, con el lema: “María se levantó y partió sin demora” Lc 1,39


                  La participación de más de 6.000 jóvenes, ha contagiado a la ciudad de Loja durante este fin de semana en las distintas parroquias, plazas y lugares adecuados para el evento. Junto con la Arquidiócesis de Cuenca, han participado dos hermanas de la Consolación acompañando a los jóvenes al grupo de El Valle y distintos grupos juveniles en el trayecto y en las actividades de la Jornada.


                  🇧🇷


                  De 23 a 25 de setembro, foi realizado o VI Dia Nacional da Juventude em Loja Equador, com o lema: "Maria se levantou e partiu sem demora" Lc 1,39


                  A participação de mais de 6.000 jovens, infectou a cidade de Loja durante este fim de semana nas diferentes paróquias, praças e locais adequados para o evento. Juntamente com a Arquidiocese de Cuenca, participaram duas irmãs de Consolação, acompanhando os jovens do grupo de El Valle e diferentes grupos de jovens na jornada e nas atividades do Dia.
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

export default Noticia2_1