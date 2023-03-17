import express from "express";
import morgan from "morgan";
import cors from "cors";

import routerCategoria from "./routers/categoria.routes.js";
import routerProducto from "./routers/producto.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api", routerCategoria);
app.use("/api", routerProducto);

app.use((req, res) => {
  res.status(404).json({
    mensaje: "endpoint not found",
  });
});

export default app;
