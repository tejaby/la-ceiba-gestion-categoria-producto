import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { crearCategoria } from "../../services/categorias";
import "./style.css";

const schema = yup
  .object({
    categoria: yup.string().required(),
    descripcion: yup.string().required(),
  })
  .required();

function FormCrearCategoria() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { categoria, descripcion } = data;
    const res = await crearCategoria({ categoria, descripcion });
    console.log(res.data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"form"}>
      <input {...register("categoria")} className={"input"} />
      <p>{errors.categoria?.message}</p>
      <input {...register("descripcion")} className={"input"} />
      <p>{errors.descripcion?.message}</p>
      <input className="submit" type="submit" />
    </form>
  );
}

export default FormCrearCategoria;
