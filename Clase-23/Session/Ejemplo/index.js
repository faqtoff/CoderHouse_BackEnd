const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "kjk5554ffhhtr656ccd",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.send(`Server listening in port ${server.address().port}`);
});

let contSinSesion = 0;
app.get("/sin-sesion", (req, res) => {
  contSinSesion++;
  res.send(`No estás logueado. Cont: ${contSinSesion}`);
});

app.get("/con-sesion", (req, res) => {
  if (!req.session.contador) {
    req.session.contador = 1;
    res.send("Bienvenido! Primer inicio");
  } else {
    req.session.contador++;
    res.send(
      `Bienvenido ${req.session.usuario}, Inicios: ${req.session.contador}`
    );
  }
});

app.get("/info", (req, res) => {
  res.send(`sessionID: ${req.sessionID}`);
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (!err) return res.send("Sesión cerrada");
    console.error(err);
    res.send("Error al cerrar sesión").json({ error: err });
  });
});

/* ========================================================================= SERVER START  */
const PORT = 4040;
const server = app.listen(PORT, () =>
  console.info(`Server listening in port ${server.address().port}`)
);
server.on("error", (error) => console.error(`Error en servidor ${error}`));
