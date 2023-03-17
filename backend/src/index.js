import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use((req, res) => {
    res.status(404).send("page not found")
})

app.listen(3000);
console.log(`Servidor en el puerto ${3000}`);
