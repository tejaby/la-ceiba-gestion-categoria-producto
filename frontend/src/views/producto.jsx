import React from "react";
import { useState, useEffect } from "react";
import FormCrearProducto from "../components/form/formCrearProducto";
import { obtenerProductos } from "../services/productos";
import ModeloTabla from "../components/createTable/modeloTabla";

function Categoria() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const getProductos = async () => {
      const res = await obtenerProductos();
      setProductos(res);
    };
    getProductos();
  }, []);
  console.log(productos);
  const columns = React.useMemo(
    () => [
      {
        Header: "Gestion Productos",
        columns: [
          {
            Header: "Categoria",
            accessor: "category",
          },
          {
            Header: "Descripcion",
            accessor: "description",
          },
          {
            Header: "Accion",
            accessor: "CategoryID",
          },
        ],
      },
    ],
    []
  );

  return (
    <div>
      <FormCrearProducto />
      <div style={{ padding: "50px" }}>
        <ModeloTabla columns={columns} data={productos} />
      </div>
    </div>
  );
}

export default Categoria;
