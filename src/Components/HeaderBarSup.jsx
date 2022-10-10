import React from 'react'
import '../Styles/Headers/HeaderBarSup.scss'

const Header = () => {
    return (
        <ul className='ul-bar'>
            <li className='li-bar'>

                <a
                    className='a-bar'
                    href="https://www.consolacion.org/documentos/seminario-dimension-social-carisma/"
                    target="_blank"
                    data-title="Documentos">Documentos
                </a>
            </li>
            <li className='li-bar'>
                <a
                    className='a-bar'
                    href="https://www.consolacion.org/audios/cantos-consolacion/"
                    target="_blank"
                    data-title="Audios">Audios
                </a>
            </li>
            <li className='li-bar'>
                <a
                    className='a-bar'
                    href="https://www.consolacion.org/videos/identidad-visual-corporativa/"
                    target="_blank"
                    data-title="Videos">Videos
                </a>
            </li>
            <li className='li-bar'>
                <a
                    className='a-bar'
                    href="https://www.consolacion.org/galeria/bicentenario-mrm200/"
                    target="_blank"
                    data-title="Galeria">Galeria
                </a>
            </li>
            <li className='li-bar'>
                <a
                    className='a-bar'
                    href="https://www.consolacion.org/inicio-sesion/"
                    target="_blank"
                    data-title="Zona_Privada">Zona Privada
                </a>
            </li>
        </ul>
    )
}
export default Header