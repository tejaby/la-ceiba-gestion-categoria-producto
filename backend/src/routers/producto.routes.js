import { Router } from "express";
import { obtenerProducto, crearProducto } from "../controllers/producto.controllers.js";

const router = Router();

router.get("/producto", obtenerProducto);

router.post("/producto", crearProducto)

export default router;
