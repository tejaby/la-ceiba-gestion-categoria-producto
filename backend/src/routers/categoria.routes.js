import { Router } from "express";
import {
  obtenerCategoria,
  crearCategoria,
} from "../controllers/categoria.controllers.js";

const router = Router();

router.get("/categoria", obtenerCategoria);

router.post("/categoria", crearCategoria);

export default router;
