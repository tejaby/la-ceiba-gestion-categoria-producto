import axios from "axios";

export const getProductos = async () => {
  try {
    const req = await axios.get(`http://localhost:3000/api/producto`);
    return req
  } catch (e) {
    console.log(e)
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

export const obtenerProducto = async (id) => {
  try {
    const req = await fetch(`http://localhost:3000/api/producto/${id}`);
    const res = await req.json();
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const crearProducto = async (data) => {
  try {
    const req = await fetch("http://localhost:3000/api/producto", {
      method: "POST",
      body: data,
    });
    const res = await req.json();
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const eliminarProducto = async (id) => {
  try {
    const req = await fetch(`http://localhost:3000/api/producto/${id}`, {
      method: "DELETE",
    });
    const res = await res.json();
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const modificarProducto = async (id, data) => {
  try {
    const req = await fetch(`http://localhost:3000/api/producto/${id}`, {
      method: "PATCH",
      body: data,
    });
    const res = req.json();
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};
