
import { BrowserRouter as Router, Routes as Rutas, Route as Ruta } from "react-router-dom";
import PaginaPrincipal from "./PaginaPrincipal";
import PaginaNoEncontrada from './Pages/PaginaNoEncontrada'

// importacion de noticias

import Noticia1_1 from "./Pages/NoticiasIndividuales/Noticia1_1";
function App() {

  return (
    <Router>
      <Rutas>
        <Ruta path="/" element={<PaginaPrincipal />} />
        <Ruta path="/noticias1" element={<Noticia1_1 />} />
        <Ruta path="*" element={<PaginaNoEncontrada />} />
      </Rutas>
    </Router>
  )
}

export default App
