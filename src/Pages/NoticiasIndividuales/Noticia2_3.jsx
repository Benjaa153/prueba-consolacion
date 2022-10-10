import React from 'react'
import Header from '../Header'
import '../../Styles/NoticiasIndividuales/NoticiasIndividuales.scss'


const Noticia2_3 = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <article className="blog-card">
              <div className="blog-card__background">
                <div className="card__background--wrapper">
                  <div className="card__background--main img-noticia6"
                  >
                    <div className="card__background--layer"></div>
                  </div>
                </div>
              </div>
              <div className="blog-card__head">
                <span className="date__box">
                  <span className="date__day">13</span>
                  <span className="date__month">Septiembre 2022</span>
                </span>
              </div>
              <div className="blog-card__info">
                <h5>CLOSING OF THE FRATERNAL VISIT TO THE DELEGATION OF ASIA</h5>
                <p>
                  <a href="#" className="icon-link mr-3"><i className="fa fa-pencil-square-o"></i></a>
                  <a href="#" className="icon-link"><i className="fa fa-comments-o"></i> </a>
                </p>
                <p className="blog-parrafo-p">
                  On September 11 Sr. Antonia Munuera Alemán our General Superior and Sr. Aránzazu Palau- General Secretary closed the Fraternal Visit to the Delegation of Asia after a week encountered and accompanying each community in the Delegation.  With many emotions, desires and motivations, all the sisters gathered together once again to share our experiences, resonances and commitments.  The visit of Mother General has brought us back to the traits of our Charism: HUMILITY, FERVENT CHARITY, HEART OF MERCY, SERVICE TO THE POOR, PROPHETIC AUDACITY, EXPERIENCE OF GOD.

                  These commitments are strengthened by encountering sincere sharing, collaboration and openness of the sisters during the meetings. This beautiful, natural presence remains as a joyful gesture until the final closing. We give thanks to God for our Charism in which we find ourselves belonging to a family of Consolation. Thank be to God for the seed of Consolation that has been planted in this giant continent and is growing.

                  St. Maria Rosa Molas has put the seed of the Gospel into our palms to incarnate our life through living the practice of all the traits and she is with us and accompanying us in our daily life.

                  St. Maria Rosa Molas, pray for us!


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

export default Noticia2_3