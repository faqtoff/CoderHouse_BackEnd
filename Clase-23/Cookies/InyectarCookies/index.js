const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

app.use(cookieParser("kjk5554ffhhtr656ccd"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`Server listening in port ${server.address().port}`);
});

app.post("/setCookies", (req, res) => {
  const { nombre, valor, tiempo } = req.body;
  console.info(
    `COOKIES: nombre: ${nombre}, tiempo: ${tiempo}, valor: ${valor}`
  );

  if (!nombre || !valor)
    return res.send("Faltan datos").json({ error: "Faltan datos" });
  if (tiempo)
    return res
      .cookie(nombre, valor, { signed: true, maxAge: parseInt(tiempo) })
      .send("Cookie creada");
  res.cookie(nombre, valor, { signed: true }).send("Cookie creada");
});

app.get("/getCookie", (req, res) => {
  res.send({ cookies: req.cookies, signedCookies: req.signedCookies });
});

app.get("/deleteCookie", (req, res) => {
  const { nombre } = req.body;
  if (!nombre) return res.send("Faltan datos").json({ error: "Faltan datos" });
  res.clearCookie(nombre).send("Cookies Borradas");
});

const PORT = 8080;
const server = app.listen(PORT, () =>
  console.info(`Server listening in port ${server.address().port}`)
);
server.on("error", (error) => console.error(`Error en servidor ${error}`));
