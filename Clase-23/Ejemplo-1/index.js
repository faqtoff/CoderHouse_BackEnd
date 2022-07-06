const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser("kjk5554ffhhtr656ccd"));

app.get("/", (req, res) => {
  res.send(`Server listening in port ${server.address().port}`);
});

app.get("/sentCookie", (req, res) => {
  const coockieName = "name";
  const coockieValue = "55555";
  res.cookie(coockieName, coockieValue).send("Nueva Cookie");
});

app.get("/sentSignCookie", (req, res) => {
  const coockieName = "name";
  const coockieValue = "55555";
  res.cookie(coockieName, coockieValue, { signed: true }).send("Nueva Cookie");
});
app.get("/sentCookieVolatil", (req, res) => {
  const coockieName = "name";
  const coockieValue = "55555";
  res.cookie(coockieName, coockieValue, { signed: true }).send("Nueva Cookie");
});

app.get("/clr", (req, res) => {
  const coockieName = "name";
  res.clearCookie(coockieName).send("Cookies Borradas");
});

app.get("/getCookie", (req, res) => {
  res.send({ cookies: req.cookies, signedCookies: req.signedCookies });
});

const PORT = 8080;
const server = app.listen(PORT, () =>
  console.info(`Server listening in port ${server.address().port}`)
);
server.on("error", (error) => console.error(`Error en servidor ${error}`));
