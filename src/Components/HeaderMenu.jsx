import '../Styles/Headers/HeaderMenu.css'
import '../Styles/responsive.css'

const HeaderMenu = () => {
    return (
        <nav className="navegacion">
            <ul className="menu">
                <li><a href="#" className="btn_texto btn_menu" title="Identidad">Identidad</a>
                    <ul className="submenu">
                        <li><a href="https://www.consolacion.org/identidad/quienes-somos/" title="Quiénes somos">Quiénes somos</a></li>
                        <li><a href="https://www.consolacion.org/identidad/historia/" title="Historia">Historia</a></li>
                        <li><a href="https://www.consolacion.org/identidad/carisma/" title="Carisma">Carisma/Espiritualidad</a></li>
                        <li><a href="https://www.consolacion.org/identidad/donde-estamos/" title="Dónde estamos">Dónde estamos</a></li>
                    </ul>
                </li>


                <li><a href="#">Misión Apostólica </a>
                    <ul className="submenu">
                        <li><a href="https://www.consolacion.org/mision-apostolica/mision-vision-valores/" title="Misión-visión-valores">Misión-visión-valores</a></li>
                        <li><a href="https://www.consolacion.org/mision-apostolica/mision-educativa/" title="Ámbito Educativo">Ámbito Educativo</a></li>
                        <li><a href="https://www.consolacion.org/mision-apostolica/mision-socio-sanitaria/" title="Ámbito socio-sanitario">Ámbito socio-sanitario</a></li>
                        <li><a href="https://www.consolacion.org/mision-apostolica/ambito-pastoral-social/" title="Ámbito social y pastoral">Ámbito social y pastoral</a></li>
                    </ul>

                </li>


                <li><a href="#">Santidad</a>
                    <ul className="submenu">
                        <li><a href="https://www.consolacion.org/santidad/m-rosa-molas/" title="Santa Mª Rosa Molas">Santa Mª Rosa Molas</a></li>
                        <li><a href="https://www.consolacion.org/santidad/m-teresa-gonzalez/" title="Venerable Mª Teresa González Justo">Venerable Mª Teresa González Justo</a></li>
                        <li><a href="https://www.consolacion.org/santidad/hermanas-martires/" title="Hermanas Mártires">Hermanas Mártires</a></li>
                    </ul>
                </li>

                <li><a href="#">Familia Consolación</a>
                    <ul className="submenu">
                        <li><a href="https://www.consolacion.org/familia-consolacion/movimientos-consolacion-para-el-mundo/" title="Movimiento Consolación para el mundo">Movimiento Consolación para el mundo</a></li>
                        <li><a href="https://www.consolacion.org/familia-consolacion/voluntariado/" title="Voluntariado Consolación">Voluntariado Consolación</a></li>
                        <li><a href="https://www.consolacion.org/familia-consolacion/fundacion-m-rosa-molas/" title="Fundación Mª Rosa Molas">Fundación <br />Mª Rosa Molas</a></li>
                        <li><a href="https://www.consolacion.org/familia-consolacion/ong-delwende/" title="ONGD Delwende">ONGD Delwende</a></li>
                    </ul>
                </li>

                <li><a href="#">Jóvenes</a>
                    <ul className="submenu">
                        <li><a href="https://www.consolacion.org/jovenes/proyecto-pastoral/" title="Proyecto de Pastoral">Proyecto de Pastoral</a></li>
                        <li><a href="https://www.consolacion.org/jovenes/en-salida-con-jovenes/" title="En salida con los jóvenes">En salida con los jóvenes</a></li>
                        <li><a href="https://www.consolacion.org/jovenes/caminando-con-jovenes/" title="Caminando con los jóvenes">Caminando con los jóvenes</a></li>
                        <li><a href="https://www.consolacion.org/jovenes/arte-y-espiritualidad/" title="Arte y espiritualidad">Arte y espiritualidad</a></li>
                    </ul>
                </li>

                <li><a href="https://www.consolacion.org/noticias/" title="Noticias">Noticias</a>
                    <ul className="submenu">
                        <li><a href="https://www.consolacion.org/publicaciones/libros/" title="Libros">Libros</a></li>
                        <li><a href="https://www.consolacion.org/publicaciones/revista-consolacion/" title="Revista Consolación">Revista Consolación</a></li>
                        <li><a href="https://www.consolacion.org/publicaciones/folletos/" title="Folletos y otros">Folletos y otros</a></li>
                    </ul>
                </li>

                <li><a href="#">Delegaciones</a>
                    <ul className="submenu">
                        <li><a href="https://www.consolacion.org/gobiernogeneral/" title="Gobierno General" className="target_blank">Gobierno General</a></li>
                        <li><a href="https://www.consolacion.org/provinciadeeuropa/" title="Provincia de Europa" className="target_blank">Provincia de Europa</a></li>
                        <li><a href="https://www.consolacion.org/provincialosandes/" title="Provincia de los Andes" className="target_blank">Provincia de <br />Los Andes</a></li>
                        <li><a href="https://www.consolacion.org/provinciamariarosamolas/" title="Provincia de Mª Rosa Molas" className="target_blank">Provincia <br />Mª Rosa Molas</a></li>
                        <li><a href="https://www.consolacion.org/viceprovinciaafrica/" title="Viceprovincia de África" className="target_blank">Viceprovincia de África</a></li>
                        <li><a href="https://www.consolacion.org/delegacionasia/" title="Delegación de Asia" className="target_blank">Delegación de Asia</a></li>
                    </ul>
                </li>

                <li><a href="#">Desfavorecidos</a>
                    <ul className="submenu">
                        <li><a href="https://www.consolacion.org/desfavorecidos/justicia-paz-integracion/" target="_blank">Justicia y paz e integracion de la creacion</a></li>
                        <li><a href="https://www.consolacion.org/desfavorecidos/seminario-dimension-social-carisma/" target="_blank">Seminario de la Dimension Social del Carisma</a></li>
                        <li><a href="https://www.consolacion.org/desfavorecidos/pobres-y-tierra-claman-consuelo/" target="_blank">Los pobres y la tierra claman consuelo</a></li>
                        <li><a href="https://www.consolacion.org/desfavorecidos/anno-laudato-si/" target="_blank">Año Laudato Si</a></li>
                        <li><a href="https://www.consolacion.org/desfavorecidos/pacto-educativo-global/" target="_blank">Pacto Educativo Global</a></li>
                    </ul>
                </li>


            </ul>
        </nav>

    )
}

export default HeaderMenu