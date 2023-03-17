export const obtenerCategorias = async () => {
  try {
    const req = await fetch("http://localhost:3000/api/categoria");
    const res = await req.json();
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
    const req = await fetch("http://localhost:3000/api/categoria", {
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

export const eliminarCategoria = async (id) => {
  try {
    const req = await fetch(`http://localhost:3000/api/categoria/${id}`, {
      method: "DELETE",
    });
    const res = await req.json();
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const modificarCategoria = async (id, data) => {
  try {
    const req = await fetch(`http://localhost:3000/api/categoria/${id}`, {
      method: "PATCH",
      body: data,
    });
    const res = await req.json();
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};
