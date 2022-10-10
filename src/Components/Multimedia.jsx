import React from 'react'
import '../Helpers/scroll.js'

import '../Styles/Multimedia.css'
const Multimedia = () => {
    return (
        <div
            className="multimedia-contenido tarjeta"
            data-aos="fade-down-left"
        >
            <div className="contenido_completo">
                <div className="linea_centro"></div>
                <h2 className="actualidad-h2">Multimedia · Redes </h2>
            </div>

            <div className="multimedia">
                <div className="multimedia_linea">
                    <img src="https://www.consolacion.org/img/icono-multimedia.png" className="img_icono_der" title="Multimedia" alt="Multimedia" />
                    <div className="linea_txt">Multimedia</div>
                </div>
                <div className="contenido_multimedia">
                    <a href="https://www.youtube.com/channel/UC2hLw2rt7v6hMwDHYCMo6PQ" className="btn_redes_abajo img_youtube " target="_blank" title="youtube">
                        <img src="https://www.consolacion.org/img/youtube.jpg" className="img_boton btna img_youtube" title="youtube" alt="youtube" />
                    </a>
                    <a href="https://es.pinterest.com/consolacionhns/" className="btn_redes_abajo img_pinterest " target="_blank" title="pinterest">
                        <img src="https://www.consolacion.org/img/pinterest.jpg" className="img_boton btna img_pinteres" title="pinterest" alt="pinterest" />
                    </a>
                    <a href="https://picasaweb.google.com/103786035738165265832" className="btn_redes_abajo img_picasa " target="_blank" title="picasa">
                        <img src="https://www.consolacion.org/img/picasa.jpg" className="img_boton btna img_picasa" title="picasa" alt="picasa" />
                    </a>
                    <a href="https://www.instagram.com/consolacion_hns/" className="btn_redes_abajo img_instagram " target="_blank" title="instagram">
                        <img src="https://www.consolacion.org/img/instagram.jpg" className="img_boton btna img_instagram" title="instagram" alt="instagram" />
                    </a>
                    <a href="http://issuu.com/mcsconsolacion" className="btn_redes_abajo img_issuu " target="_blank" title="issuu">
                        <img src="https://www.consolacion.org/img/issuu.jpg" className="img_boton btna img_issuu" title="issuu" alt="issuu" />
                    </a>

                </div>

            </div>
            <div className="linea_centro"></div>

            <div
                className="contenedor-img tarjeta"
                data-aos="flip-up"
            >
                <img
                    src="https://www.consolacion.org/973/activos/imagen/wconso_foto_banner_pie_0189banner_pie-EJqtGapBWQc7I2HO.jpg"
                    alt="Movimiento Com"
                    title=""
                    className="img_banner2"
                >

                </img>
                <img
                    src="https://www.consolacion.org/138/activos/imagen/wconso_foto_banner_pie_4537banner_pie-AvfELXseWIzdXJuF.png"
                    alt="ruta"
                    title=""
                    className="img_banner"
                >
                </img>

                <img
                    src="https://www.consolacion.org/910/activos/imagen/wconso_foto_banner_pie_0117banner_pie-mSrCEMwXOzkpGO4b.jpg"
                    alt="Secretariado latinoamericano"
                    title=""
                    className="img_banner3">
                </img>
            </div>

        </div>

    )
}

export default Multimedia