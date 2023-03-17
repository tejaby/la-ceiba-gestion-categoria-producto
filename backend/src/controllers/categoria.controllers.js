import pool from "../db.js";

export const obtenerCategorias = async (req, res) => {
  try {
    const [rows] = await pool.query(`SELECT * FROM categoria`);
    res.json(rows);
  } catch (e) {
    return res.status(500).json({
      message: "Algo va mal",
    });
  }
};

export const obtenerCategoria = async (req, res) => {
  const id = req.params.id;
  try {
    const [rows] = await pool.query(
      `SELECT * FROM categoria WHERE id_categoria = ?`,
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

export const crearCategoria = (req, res) => {
  res.send("categoria");
};
