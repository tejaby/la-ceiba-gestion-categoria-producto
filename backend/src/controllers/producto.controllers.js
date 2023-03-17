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

export const crearProducto = (req, res) => {
  res.send("producto");
};
