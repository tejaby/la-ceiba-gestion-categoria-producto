import axios from "axios";

export const obtenerCategorias = async () => {
  try {
    const req = await fetch("http://localhost:3000/api/categoria");
    const res = await req.json();
    console.log(res);
    return res;
  } catch (e) {
    return [];
  }
};

export const obtenerCategoria = async (id) => {
  try {
    const req = await fetch(`http://localhost:3000/api/categoria/${id}`);
    const res = await req.json();
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const crearCategoria = async (data) => {
  try {
    const res = await axios.post("http://localhost:3000/api/categoria", data);
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const crearProducto = async (data) => {
  try {
    const res = await axios.post("http://localhost:3000/api/categoria", data);
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const eliminarCategoria = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3000/api/categoria/${id}`);
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const modificarCategoria = async (id, data) => {
  try {
    const res = await axios.patch(
      `http://localhost:3000/api/categoria/${id}`,
      data
    );
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};
