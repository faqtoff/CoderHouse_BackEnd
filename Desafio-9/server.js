/* ------------------------ Modulos ------------------------------- */
import Express from "express";
import bodyParser from "body-parser";
import exphbs from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";

import { createServer } from "http";
import { Server } from "socket.io";
import routerProductos from "./src/routes/productos.routes.js";
import newConnectionHandler from "./src/handlers/newConnection.handler.js";
import timeMid from "./src/middlewares/time.js";
import errorMid from "./src/middlewares/error.js";
/* ------------------------ Instancia de Express ------------------------------- */
const app = Express();
const httpServer = createServer(app);
const io = new Server(httpServer);

/* ------------------------ Middlewares  ------------------------------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/", Express.static(__dirname + "/public"));
app.use(Express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => timeMid(req, res, next));

app.use("/productos", routerProductos);

app.use((err, req, res, next) => errorMid(err, req, res, next));

/* ------------------------  Conf Motor  ------------------------------- */
app.set("views", path.join(__dirname, "src/views"));
app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: "hbs",
  })
);
app.set("view engine", "hbs");

/* ------------------------  Socket  ------------------------ */
io.on("connection", (socket) => newConnectionHandler(socket));

/* ------------------------ Servidor ------------------------------- */
const PORT = 8080;
const server = httpServer.listen(PORT, () =>
  console.info(`Servidor escuchando en el puerto ${PORT}`)
);
server.on("error", (error) => console.error(`Error en servidor ${error}`));
