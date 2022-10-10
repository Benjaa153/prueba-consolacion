
import { BrowserRouter as Router, Routes as Rutas, Route as Ruta } from "react-router-dom";


import PaginaPrincipal from "./PaginaPrincipal";
import PaginaNoEncontrada from './Pages/PaginaNoEncontrada'

// importacion de noticias

import Noticia1_1 from "./Pages/NoticiasIndividuales/Noticia1_1";
import Noticia1_2 from "./Pages/NoticiasIndividuales/Noticia1_2";
import Noticia1_3 from "./Pages/NoticiasIndividuales/Noticia1_3";


function App() {

  return (
    <Router>
      <Rutas>
        <Ruta path="/" element={<PaginaPrincipal />} />
        <Ruta path="/noticias1" element={<Noticia1_1 />} />
        <Ruta path="/noticias2" element={<Noticia1_2 />} />
        <Ruta path="/noticias3" element={<Noticia1_3 />} />
        <Ruta path="*" element={<PaginaNoEncontrada />} />
      </Rutas>
    </Router>
  )
}

export default App
