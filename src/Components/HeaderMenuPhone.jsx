import '../Styles/responsive.css'
import '../Styles/Headers/HeaderPhone.css'
const HeaderMenuPhone = () => {

    const clickBtn = () => {
        const menu = document.querySelector('#menu2')
        menu.classList.toggle("mostrar");

        const subMenuBtn = document.querySelectorAll('.submenu-btn')

        for (let i = 0; i < subMenuBtn.length; i++) {
            subMenuBtn[i].addEventListener("click", function () {
                if (window.innerWidth < 1600) {
                    const subMenu = this.nextElementSibling;

                    const height = subMenu.scrollHeight;

                    if (subMenu.classList.contains("desplegar")) {
                        subMenu.classList.remove("desplegar");
                        subMenu.removeAttribute("style");

                    } else {
                        subMenu.classList.add("desplegar");
                        subMenu.style.height = height + "px";
                    }
                }
            });
        }
    }

    return (
        <>
            <span
                className="nav-bar2"
                id='btnMenu'
                onClick={() => clickBtn()}>
                <i className="fa-solid fa-bars">
                </i>Menu
            </span>

            <nav className="main-nav">
                <ul className="menu2" id="menu2">
                    <li className="menu__item container-submenu">
                        <a className="menu__link submenu-btn">Identidad <i className="fas fa-chevron-down"></i></a>
                        <ul className="submenu2">
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/identidad/quienes-somos/" target="_blank" title="Quiénes somos">Quiénes somos</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/identidad/historia/" target="_blank" title="Historia">Historia</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/identidad/carisma/" target="_blank" title="Carisma">Carisma/Espiritualidad</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/identidad/donde-estamos/" target="_blank" title="Dónde estamos">Dónde estamos</a></li>
                        </ul>
                    </li>


                    <li className="menu__item container-submenu">
                        <a className="menu__link submenu-btn">Misión Apostólica <i className="fas fa-chevron-down"></i></a>
                        <ul className="submenu2">

                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/mision-apostolica/mision-vision-valores/" target="_blank" title="Misión-visión-valores">Misión-visión-valores</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/mision-apostolica/mision-educativa/" target="_blank" title="Ámbito Educativo">Ámbito Educativo</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/mision-apostolica/mision-socio-sanitaria/" target="_blank" title="Ámbito socio-sanitario">Ámbito socio-sanitario</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/mision-apostolica/ambito-pastoral-social/" target="_blank" title="Ámbito social y pastoral">Ámbito social y pastoral</a></li>
                        </ul>
                    </li>

                    <li className="menu__item container-submenu">
                        <a className="menu__link submenu-btn">Santidad <i className="fas fa-chevron-down"></i></a>
                        <ul className="submenu2">
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/santidad/m-rosa-molas/" target="_blank" title="Santa Mª Rosa Molas">Santa Mª Rosa Molas</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/santidad/m-teresa-gonzalez/" target="_blank" title="Venerable Mª Teresa González Justo">Venerable Mª Teresa González Justo</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/santidad/hermanas-martires/" target="_blank" title="Hermanas Mártires">Hermanas Mártires</a></li>
                        </ul>
                    </li>

                    <li className="menu__item container-submenu">
                        <a className="menu__link submenu-btn">Familia Consolación <i className="fas fa-chevron-down"></i></a>
                        <ul className="submenu2">
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/familia-consolacion/movimientos-consolacion-para-el-mundo/" target="_blank" title="Movimiento Consolación para el mundo">Movimiento Consolación para el mundo</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/familia-consolacion/voluntariado/" target="_blank" title="Voluntariado Consolación">Voluntariado Consolación</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/familia-consolacion/fundacion-m-rosa-molas/" target="_blank" title="Fundación Mª Rosa Molas">Fundación <br />Mª Rosa Molas</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/familia-consolacion/ong-delwende/" target="_blank" title="ONGD Delwende">ONGD Delwende</a></li>
                        </ul>
                    </li>

                    <li className="menu__item container-submenu">
                        <a className="menu__link submenu-btn">Jóvenes <i className="fas fa-chevron-down"></i></a>
                        <ul className="submenu2">
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/jovenes/proyecto-pastoral/" target="_blank" title="Proyecto de Pastoral">Proyecto de Pastoral</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/jovenes/en-salida-con-jovenes/" target="_blank" title="En salida con los jóvenes">En salida con los jóvenes</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/jovenes/caminando-con-jovenes/" target="_blank" title="Caminando con los jóvenes">Caminando con los jóvenes</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/jovenes/arte-y-espiritualidad/" target="_blank" title="Arte y espiritualidad">Arte y espiritualidad</a></li>
                        </ul>
                    </li>

                    <li className="menu__item container-submenu">
                        <a className="menu__link submenu-btn">Noticias <i className="fas fa-chevron-down"></i></a>
                        <ul className="submenu2">
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/publicaciones/libros/" target="_blank" title="Libros">Libros</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/publicaciones/revista-consolacion/" target="_blank" title="Revista Consolación">Revista Consolación</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/publicaciones/folletos/" target="_blank" title="Folletos y otros">Folletos y otros</a></li>
                        </ul>
                    </li>

                    <li className="menu__item container-submenu">
                        <a className="menu__link submenu-btn">Delegaciones <i className="fas fa-chevron-down"></i></a>
                        <ul className="submenu2">
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/gobiernogeneral/" title="Gobierno General" target="_blank">Gobierno General</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/provinciadeeuropa/" title="Provincia de Europa" target="_blank">Provincia de Europa</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/provincialosandes/" title="Provincia de los Andes" target="_blank">Provincia de <br />Los Andes</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/provinciamariarosamolas/" title="Provincia de Mª Rosa Molas" target="_blank">Provincia <br />Mª Rosa Molas</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/viceprovinciaafrica/" title="Viceprovincia de África" target="_blank">Viceprovincia de África</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/delegacionasia/" title="Delegación de Asia" target="_blank">Delegación de Asia</a></li>
                        </ul>
                    </li>

                    <li className="menu__item container-submenu">
                        <a className="menu__link submenu-btn">Desfavorecidos <i className="fas fa-chevron-down"></i></a>
                        <ul className="submenu2">
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/desfavorecidos/justicia-paz-integracion/" target="_blank">Justicia y paz e integracion de la creacion</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/desfavorecidos/seminario-dimension-social-carisma/" target="_blank">Seminario de la Dimension Social del Carisma</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/desfavorecidos/pobres-y-tierra-claman-consuelo/" target="_blank">Los pobres y la tierra claman consuelo</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/desfavorecidos/anno-laudato-si/" target="_blank">Año Laudato Si</a></li>
                            <li className="menu__item" onClick={() => clickBtn()}><a className="menu__link" href="https://www.consolacion.org/desfavorecidos/pacto-educativo-global/" target="_blank">Pacto Educativo Global</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default HeaderMenuPhone