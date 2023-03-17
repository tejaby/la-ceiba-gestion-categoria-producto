import { useForm } from "react-hook-form";

import { crearCategoria } from "../../services/categorias";
import './style.css'

function FormCrearCategoria() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { categoria, descripcion } = data;
    const res = await crearCategoria({ categoria, descripcion });
    console.log(res.data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"form"}>
      <input className="input" {...register("categoria", { required: true, maxLength: 50 })} />
      <input className="input" {...register("descripcion", { required: true, maxLength: 100 })} />
      <input className="submit" type="submit" />
    </form>
  );
}

export default FormCrearCategoria;
