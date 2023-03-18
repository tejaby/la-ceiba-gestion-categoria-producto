import React from "react";
import { useState, useEffect } from "react";
import FormCrearProducto from "../components/form/formCrearProducto";
import { obtenerProductos, eliminarProducto } from "../services/productos";
import ModeloTabla from "../components/createTable/modeloTabla";
import moment from "moment";

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
            Header: "Nombre",
            accessor: "nombre",
          },
          {
            Header: "Descripcion",
            accessor: "description",
          },
          {
            Header: "Fecha_ingreso",
            accessor: (d) => {
              return moment(d.expiration_date).format("DD/MM/YYYY");
            },
          },
          {
            Header: "Proveedor",
            accessor: "proveedor",
          },
          {
            Header: "Nit_proveedor",
            accessor: "nit_proveedor",
          },
          {
            Header: "Cantidad",
            accessor: "cantidad",
          },
          {
            Header: "Existencia",
            accessor: "existencia",
          },
          {
            Header: "Precio_costo",
            accessor: "precio_costo",
          },
          {
            Header: "Precio_venta",
            accessor: "precio_venta",
          },
          {
            Header: "Funciones",
            accessor: (del) => {
              return (
                <button className="btn btn-danger" onClick={() => handleDelete(del.id_producto)}>
                  delete
                </button>
              );
            },
          },
        ],
      },
    ],
    []
  );

  const handleDelete = (id) => {
    eliminarProducto(id).then((req) => console.log(req));
  };

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
