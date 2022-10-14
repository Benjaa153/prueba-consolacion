
import { BrowserRouter as Router, Routes as Rutas, Route as Ruta } from "react-router-dom";


import PaginaPrincipal from "./PaginaPrincipal";
import PaginaNoEncontrada from './Pages/PaginaNoEncontrada'
import Footer from '../src/Pages/Footer'
// importacion de noticias 1

import Noticia1_1 from "./Pages/NoticiasIndividuales/Noticia1_1";
import Noticia1_2 from "./Pages/NoticiasIndividuales/Noticia1_2";
import Noticia1_3 from "./Pages/NoticiasIndividuales/Noticia1_3";

// importacion de noticias 2

import Noticia2_1 from "./Pages/NoticiasIndividuales/Noticia2_1";
import Noticia2_2 from "./Pages/NoticiasIndividuales/Noticia2_2";
import Noticia2_3 from "./Pages/NoticiasIndividuales/Noticia2_3";


function App() {

  return (
    <Router>
      <Rutas>
        <Ruta path="/" element={<PaginaPrincipal />} />
        <Ruta path="/noticias1" element={<Noticia1_1 />} />
        <Ruta path="/noticias2" element={<Noticia1_2 />} />
        <Ruta path="/noticias3" element={<Noticia1_3 />} />

        {/* noticias del segundo componente  */}

        <Ruta path="/noticias4" element={<Noticia2_1 />} />
        <Ruta path="/noticias5" element={<Noticia2_2 />} />
        <Ruta path="/noticias6" element={<Noticia2_3 />} />2

        <Ruta path="*" element={<PaginaNoEncontrada />} />
      </Rutas>
      <Footer />

    </Router>
  )
}

export default App
