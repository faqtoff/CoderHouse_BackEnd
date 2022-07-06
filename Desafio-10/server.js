const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const connectMongo = require("connect-mongo");

const app = express();
const mongoStore = connectMongo.create({
  mongoUrl: "mongodb+srv://cluster0.kixqh.mongodb.net/myFirstDatabase",
  ttl: 60,
});

app.use(cookieParser("kjk5554ffhhtr656ccddd&R4558$s"));
app.use(
  session({
    store: mongoStore,
    secret: "kjk5554ffhhtr656ccd",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.get("/login", (req, res) => {
  const getNombreSession = (req) => {
    const nombre = req.session?.nombre ?? "";
    return nombre;
  };

  if (!req.session.contador) {
    req.session.contador = 1;
    req.session.nombre = req.query.nombre;
    return res.send(
      `Bienvenido ${getNombreSession(req)}! Estamos felices de tenerte...`
    );
  }

  req.session.contador++;
  res.send(`Hola ${getNombreSession(req)}, Inicios: ${req.session.contador}`);
});

app.get("/logout", (req, res) => {
  const name = getNombreSession(req);
  req.session.destroy((err) => {
    if (!err) return res.send(`Hasta luego ${name}!`);
    console.error(err);
    res.send("Error al cerrar sesión").json({ error: err });
  });
});

/* ========================================================================= SERVER START  */
const PORT = 3312;
const server = app.listen(PORT, () =>
  console.info(`Server listening in port ${server.address().port}`)
);
server.on("error", (error) => console.error(`Error en servidor ${error}`));
