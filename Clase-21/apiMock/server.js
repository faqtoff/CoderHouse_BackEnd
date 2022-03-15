import express from "express";
import bodyParser from "body-parser";
import usuariosRouter from "./src/routes/usuarios.router.js";

const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('api/usuarios', usuariosRouter);

const PORT = 8080
const server = app.listen(PORT, () => {
   console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on('error', error => console.log(`Error en servidor: ${error}`))
