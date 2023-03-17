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

import { useEffect } from "react";

function App() {
  useEffect(() => {
    // obtenerProductos();
    // obtenerProducto();
  }, []);
  return <h1>hello world</h1>;
}

export default App;
