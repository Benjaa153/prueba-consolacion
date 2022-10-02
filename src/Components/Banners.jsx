import React from 'react'
import ImgFondoBanner1 from '../Assets/Img/wconso_foto_banner_10633banner_cabecera_portada-3ZeX0Dmt71LqAf55.png'
import ImgFondoBanner2 from '../Assets/Img/wconso_foto_banner_10245banner_cabecera_portada-L0NyN7MmNucq1giw.png'
import ImgFondoBanner3 from '../Assets/Img/wconso_foto_banner_10062banner_cabecera_portada-9RoRFVaJVumlpcyJ.png'

import '../Styles/responsive.css'
import '../Styles/banners.css'
const Banners = () => {
    return (
        <div className="slider">
            <ul className="ul-slider">
                <li className="li-slider"><img className="img-slider" src={ImgFondoBanner1}></img></li>
                <li className="li-slider"><img className="img-slider" src={ImgFondoBanner2}></img></li>
                <li className="li-slider"><img className="img-slider" src={ImgFondoBanner3}></img></li>
                
            </ul>
        </div>
    )
}

export default Banners