import React from 'react'
import Header from '../Header'
import '../../Styles/NoticiasIndividuales/NoticiasIndividuales.scss'
const Noticia2_2 = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <article className="blog-card">
              <div className="blog-card__background">
                <div className="card__background--wrapper">
                  <div className="card__background--main img-noticia5"
                  >
                    <div className="card__background--layer"></div>
                  </div>
                </div>
              </div>
              <div className="blog-card__head">
                <span className="date__box">
                  <span className="date__day">04</span>
                  <span className="date__month">Septiembre 2022</span>
                </span>
              </div>
              <div className="blog-card__info">
                <h5>MÊS DAS PROFISSÕES COM OS PEQUENOS</h5>
                <p>
                  <a href="#" className="icon-link mr-3"><i className="fa fa-pencil-square-o"></i></a>
                  <a href="#" className="icon-link"><i className="fa fa-comments-o"></i> </a>
                </p>
                <p className="blog-parrafo-p">

                  O plano das actividades da acção social propõe de falar das profissões todo o mês de Agosto com o objectivo que as crianças vejam e conheçam várias profissões.

                  Sabemos que as crianças aprendem vendo. Por isso, pensamos em organizar esta actividade de uma maneira criativa, de modo a permitir uma fácil compreensão fácil por parte das crianças.

                  Em conversa com os pais, organizamos as actividades. As crianças estavam ficaram emocionadas na perspectiva de conhecer e de poder escolher a profissão que gostariam de exercer no futuro.

                  No dia fixado para a apresentação das profissões, as crianças chegaram à escola vestidas de suas roupas de suas profissões: nas salas, as actividades consistiram em explicar às crianças a profissão de cada um e as ferramentas que cada profissão usa no seu trabalho. Durante três dias, vivemos ao ritmo das profissões e tivemos no dia 31 de Agosto, a visita-passeio à Escola Secundária de Muele.

                  <br></br>       <br></br>     <br></br> Escolinha Maria Rosa Molas de Inhambane    <br></br>     <br></br>

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

export default Noticia2_2