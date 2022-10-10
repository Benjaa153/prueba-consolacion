import React from 'react'
import App from '../../App'
import PaginaNoEncontrada from '../../Pages/PaginaNoEncontrada'
import '../../Styles/noticias.css'
import '../../Helpers/main'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes as Rutas, Route as Ruta } from "react-router-dom";
const Noticias = () => {


    return (
        <Router>
            <Rutas>
                <Ruta path="/" element={<App />} />
                <Ruta path="*" element={<PaginaNoEncontrada />} />
            </Rutas>
        </Router>

    )
}

export default Noticias