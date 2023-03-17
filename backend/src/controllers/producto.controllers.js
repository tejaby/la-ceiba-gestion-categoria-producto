import pool from "../db.js";

export const obtenerProductos = async (req, res) => {
  try {
    const [rows] = await pool.query(`SELECT * FROM producto`);
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
