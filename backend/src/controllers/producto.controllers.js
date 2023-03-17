import pool from "../db.js";

export const obtenerProductos = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT * FROM producto WHERE estado = true`
    );
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo va mal",
    });
  }
};

export const obtenerProducto = async (req, res) => {
  const id = req.params.id;
  try {
    const [rows] = await pool.query(
      `SELECT * FROM producto WHERE id_producto = ?`,
      [id]
    );

    if (rows.length <= 0) {
      return res.status(404).json({
        message: "No se encontro nada",
      });
    }

    res.send(rows);
  } catch (e) {
    return res.status(500).json({
      message: "Algo va mal",
    });
  }
};

export const crearProducto = async (req, res) => {
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
  } = req.body;
  try {
    const [rows] = await pool.query(
      `INSERT INTO producto (nombre, descripcion, fecha_ingreso, proveedor, nit_proveedor, cantidad, existencia, precio_costo, precio_venta) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        nombre,
        descripcion,
        fecha_ingreso,
        proveedor,
        nit_proveedor,
        cantidad,
        existencia,
        precio_costo,
        precio_venta,
      ]
    );
    res.send({
      id_producto: rows.insertId,
      nombre,
      descripcion,
      fecha_ingreso,
      proveedor,
      nit_proveedor,
      cantidad,
      existencia,
      precio_costo,
      precio_venta,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Algo va mal",
    });
  }
};

export const eliminarProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query(
      `UPDATE producto SET estado = false WHERE id_producto = ?`,
      [id]
    );

    res.sendStatus(204);
  } catch (e) {
    return res.status(500).json({
      message: "Algo va mal",
    });
  }
};

export const modificarProducto = async (req, res) => {
  const { id } = req.params;
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
  } = req.body;
  try {
    const [request] = await pool.query(
      `UPDATE producto SET nombre = IFNULL(?, nombre), descripcion = IFNULL(?, descripcion), fecha_ingreso = IFNULL(?, fecha_ingreso), proveedor = IFNULL(?, proveedor), nit_proveedor = IFNULL(?, nit_proveedor), cantidad = IFNULL(?, cantidad), existencia = IFNULL(?, existencia), precio_costo = IFNULL(?, precio_costo), precio_venta = IFNULL(?, precio_venta) WHERE id_producto = ?`,
      [
        nombre,
        descripcion,
        fecha_ingreso,
        proveedor,
        nit_proveedor,
        cantidad,
        existencia,
        precio_costo,
        precio_venta,
        id,
      ]
    );

    if (request.affectedRows === 0)
      return res.status(404).json({
        message: "No ocurrio nada",
      });

    const [rows] = await pool.query(
      `SELECT * FROM producto WHERE id_producto = ?`,
      [id]
    );
    res.send(rows[0]);
  } catch (e) {
    return res.status(500).json({
      message: "Algo va mal",
    });
  }
};
