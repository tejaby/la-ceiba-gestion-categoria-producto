import pool from "../db.js";

export const obtenerCategorias = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT * FROM categoria WHERE estado = true`
    );
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

export const crearCategoria = async (req, res) => {
  const { categoria, descripcion } = req.body;
  try {
    const [rows] = await pool.query(
      `INSERT INTO categoria (categoria, descripcion) VALUES (?, ?)`,
      [categoria, descripcion]
    );
    res.send({
      id_categoria: rows.insertId,
      categoria,
      descripcion,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Algo va mal",
    });
  }
};

export const eliminarCategoria = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query(
      `UPDATE categoria SET estado = false WHERE id_categoria = ?`,
      [id]
    );

    res.sendStatus(204);
  } catch (e) {
    return res.status(500).json({
      message: "Algo va mal",
    });
  }
};

export const modifiarCategoria = async (req, res) => {
  const { id } = req.params;
  const { categoria, descripcion } = req.body;
  try {
    const [request] = await pool.query(
      `UPDATE categoria SET categoria = IFNULL(?, categoria), descripcion = IFNULL(?, descripcion) WHERE id_categoria = ?`,
      [categoria, descripcion, id]
    );

    if (request.affectedRows === 0)
      return res.status(404).json({
        message: "No ocurrio nada",
      });

    const [rows] = await pool.query(
      `SELECT * FROM categoria WHERE id_categoria = ?`,
      [id]
    );
    res.send(rows[0]);
  } catch (e) {
    return res.status(500).json({
      message: "Algo va mal",
    });
  }
};
