import { Router } from "express";
import {
  obtenerCategorias,
  obtenerCategoria,
  crearCategoria,
} from "../controllers/categoria.controllers.js";

const router = Router();

router.get("/categoria", obtenerCategorias);

router.get("/categoria/:id", obtenerCategoria);

router.post("/categoria", crearCategoria);

export default router;
