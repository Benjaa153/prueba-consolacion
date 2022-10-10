import React from 'react'
import '../Helpers/scroll.js'
import '../Styles/Actualidad.css'
const Actualidad = () => {
    return (
        <div
            className='contenido-actualidad tarjeta'
            data-aos="fade-down-left"
        >
            <div className="contenido_completo">
                <div className="linea_centro"></div>
                <img src="https://www.consolacion.org/img/actualidad.png" className="iconos_izq" title="Actualidad" alt="Actualidad" />
                <h2 className="actualidad-h2">Actualidad</h2>
            </div>

            <div className="solidaridad">
                <div className="solidaridad_linea">
                    <img src="https://www.consolacion.org/img/icono-solidaridad.png" className="img_icono_der" title="Solidaridad" alt="Solidaridad" />
                    <div className="linea_txt">Solidaridad</div>
                </div>
                <div className="contenido_multimedia">
                    <div className="linea_vertical"></div>
                    <div className="linea_horizontal"></div>
                    <a href="http://delwende.org/" target="_blank" title="delwende">
                        <img src="https://www.consolacion.org/img/delwende.jpg" className="img_delwende" title="delwende" alt="delwende" />
                    </a>
                    <a href="http://voluntariadoconsolacion.es/" target="_blank" title="Voluntariado consolacion">
                        <img src="https://www.consolacion.org/img/icono2.jpg" className="img_icono2" title="Voluntariado consolacion" alt="Voluntariado consolacion" />
                    </a>
                    <a href="https://www.consolacion.org/familia-consolacion/fundacion-m-rosa-molas/" target="_blank" title="Mª Rosa Molas Fundación">
                        <img src="https://www.consolacion.org/img/m-rosa-molas-fundacion.jpg" className="img_m_rosa_molas" title="Mª Rosa Molas Fundación" alt="Mª Rosa Molas Fundación" />
                    </a>
                    <a href="https://www.consolacion.org/familia-consolacion/misiones-consolacion" target="_blank" title="misiones consolacion 2015">
                        <img src="https://www.consolacion.org/img/misiones-consolacion-2015.jpg" className="img_misiones" title="misiones consolacion 2015" alt="misiones consolacion 2015" />
                    </a>

                </div>
            </div>
            <div className="linea_centro"></div>

        </div>
    )
}

export default Actualidad