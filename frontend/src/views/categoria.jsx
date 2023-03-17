import React from "react";
import { useState, useEffect } from "react";
import FormCrearCategoria from "../components/form/formCrearCategoria";
import { obtenerCategorias } from "../services/categorias";
import { eliminarCategoria } from "../services/categorias";
import ModeloTabla from "../components/createTable/modeloTabla";

function Categoria() {
  const [categorias, setCategorias] = useState([]);

  const onDelete = async (id) => {
    const res = await eliminarCategoria(id);
    console.log(res);
  };

  const handleSubmit = (e) => {
    e.prevent.default();
  };

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
            accessor: "categoria",
          },
          {
            Header: "Descripcion",
            accessor: "descripcion",
          },
          // {
          //   Header: "Acciones",
          //   accessor: (id_categoria) => {
          //     return (
          //       <>
          //         <a href="#" className="btn btn-danger" onSubmit={handleSubmit}>
          //           <i onClick={() => onDelete(id_categoria)}>delete</i>
          //         </a>
                  
          //       </>
          //     );
          //   },
          // },
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
