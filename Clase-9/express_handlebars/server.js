/* ------------------------ Modulos ------------------------------- */
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
// const path = require('fs')
/* ------------------------ Instancia de express ------------------------------- */
const app = express();

/* ------------------------ Middlewares  ------------------------------- */
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ------------------------  Conf Motor  ------------------------------- */
app.set("views", path.join(__dirname, "views"));

app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: "hbs",
  })
);

/* ------------------------  Rutas  ------------------------------- */
app.get("/datos", (req, res) => {
  const datos = {
    nombre: "Jose",
    apellido: "Perez",
    email: "Juanaperez@gmail.com",
    telefono: 3885478985,
  };
  res.render("partials/plantilla.hbs", datos);
});
app.get("/datos2", (req, res) => {
  const datos = {
    nombre: "Maricel",
    apellido: "Ochoa",
    email: "Juanaperez@gmail.com",
    telefono: 3885478985,
  };
  res.render("partials/plantilla.hbs", datos);
});

/* ------------------------ Servidor ------------------------------- */
const PORT = 7272;

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
