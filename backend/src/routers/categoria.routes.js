import { Router } from "express";
import {
  obtenerCategorias,
  obtenerCategoria,
  crearCategoria,
  eliminarCategoria,
  modifiarCategoria,
} from "../controllers/categoria.controllers.js";

const router = Router();

router.get("/categoria", obtenerCategorias);

router.get("/categoria/:id", obtenerCategoria);

router.post("/categoria", crearCategoria);

router.delete("/categoria/:id", eliminarCategoria);

router.patch("/categoria/:id", modifiarCategoria)

export default router;
