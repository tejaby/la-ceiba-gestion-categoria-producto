import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categoria from "./views/categoria";
import Producto from "./views/producto";
import About from "./views/about";
import NotFound from "./views/notFound";
import Home from "./views/home";
import NavBar from "./components/navBar";
import "./App.css";

import {
  obtenerCategorias,
  obtenerCategoria,
  crearCategoria,
  eliminarCategoria,
  modificarCategoria,
} from "./services/categorias.js";

import {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
  eliminarProducto,
  modificarProducto,
} from "./services/productos.js";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria" element={<Categoria />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
