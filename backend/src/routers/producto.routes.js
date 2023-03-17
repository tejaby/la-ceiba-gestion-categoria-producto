import { Router } from "express";
import {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
  eliminarProducto,
  modificarProducto,
} from "../controllers/producto.controllers.js";

const router = Router();

router.get("/producto", obtenerProductos);

router.get("/producto/:id", obtenerProducto);

router.post("/producto", crearProducto);

router.delete("/producto/:id", eliminarProducto);

router.patch("/producto/:id", modificarProducto);

export default router;
