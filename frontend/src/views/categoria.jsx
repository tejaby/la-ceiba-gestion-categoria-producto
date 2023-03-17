import React from "react";
import { useState, useEffect } from "react";
import FormCrearCategoria from "../components/form/formCrearCategoria";
import { obtenerCategorias } from "../services/categorias";
import ModeloTabla from "../components/createTable/tablaCategoria";

function Categoria() {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const getCategorias = async () => {
      const res = await obtenerCategorias();
      setCategorias(res);
    };
    getCategorias();
  }, []);
  console.log(categorias);
  const columns = React.useMemo(
    () => [
      {
        Header: "Gestion Categorias",
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
      <FormCrearCategoria />
      <div style={{ padding: "50px" }}>
        <ModeloTabla columns={columns} data={categorias} />
      </div>
    </div>
  );
}

export default Categoria;
