import axios from "axios";

export const getProductos = async () => {
  try {
    const req = await axios.get(`http://localhost:3000/api/producto`);
    return req;
  } catch (e) {
    console.log(e);
  }
};

export const obtenerProductos = async () => {
  try {
    const req = await fetch("http://localhost:3000/api/producto");
    const res = await req.json();
    return res;
  } catch (e) {
    return [];
  }
};

export const crearProducto = async (data) => {
  try {
    const res = await axios.post("http://localhost:3000/api/producto", data);
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const eliminarProducto = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3000/api/producto/${id}`);
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const modificarProducto = async (id, data) => {
  try {
    const res = await axios.patch(
      `http://localhost:3000/api/producto/${id}`,
      data
    );
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};
