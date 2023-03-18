import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { crearProducto } from "../../services/productos";
import "./style.css";

const schema = yup
  .object({
    nombre: yup.string().required(),
    descripcion: yup.string().required(),
    proveedor: yup.string().required(),
    nit_proveedor: yup.string().required(),
    cantidad: yup.number().positive().integer().required(),
    existencia: yup.number().positive().integer().required(),
    precio_costo: yup.number().required(),
    precio_venta: yup.number().required(),
  })
  .required();

function FormCrearProducto() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    const {
      nombre,
      descripcion,
      fecha_ingreso,
      proveedor,
      nit_proveedor,
      cantidad,
      existencia,
      precio_costo,
      precio_venta,
    } = data;
    const res = await crearProducto(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"formtwo"}>
      <div className="cont">
        <input {...register("nombre")} placeholder="nombre" className="input" />
        {/* <p>{errors.nombre?.message}</p> */}
        <input
          {...register("descripcion")}
          placeholder="descripcion"
          className="input"
        />
        {/* <p>{errors.descripcion?.message}</p> */}
        <input
          {...register("fecha_ingreso")}
          placeholder="fecha_ingreso YY/MM/DD"
          className="input"
          type={"date"}
        />
      </div>
      {/* <p>{errors.fecha_ingreso?.message}</p> */}
      <div className="cont">
        <input
          {...register("proveedor")}
          placeholder="proveedor"
          className="input"
        />

        {/* <p>{errors.proveedor?.message}</p> */}

        <input
          {...register("nit_proveedor")}
          placeholder="nit_proveedor"
          className="input"
        />
        {/* <p>{errors.nit_proveedor?.message}</p> */}
        <input
          {...register("cantidad")}
          placeholder="cantidad"
          className="input"
        />
      </div>
      {/* <p>{errors.cantidad?.message}</p> */}
      <div className="cont">
        <input
          {...register("existencia")}
          placeholder="existencia"
          className="input"
        />

        {/* <p>{errors.existencia?.message}</p> */}
        <input
          {...register("precio_costo")}
          placeholder="precio_costo"
          className="input"
        />
        {/* <p>{errors.precio_costo?.message}</p> */}
        <input
          {...register("precio_venta")}
          placeholder="precio_venta"
          className="input"
        />
        {/* <p>{errors.precio_venta?.message}</p> */}
      </div>
      <input type="submit" className="submit" />
    </form>
  );
}

export default FormCrearProducto;
