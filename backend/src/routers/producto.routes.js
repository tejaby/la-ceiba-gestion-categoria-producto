import { Router } from "express";
import {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
} from "../controllers/producto.controllers.js";

const router = Router();

router.get("/producto", obtenerProductos);

router.get("/producto/:id", obtenerProducto);

router.post("/producto", crearProducto);

export default router;
