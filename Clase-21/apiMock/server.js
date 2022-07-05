import Express from "express";
import bodyParser from "body-parser";
import usuariosRouter from "./src/routes/usuarios.router.js";

const app = Express()
const PORT  = 8080

try {
   app.use(Express.json())
   app.use(bodyParser.urlencoded( {extended: true} ))

   app.use('/api/usuarios', usuariosRouter);
} catch (error) {
   console.error(error)
}



const server = app.listen( PORT, () => console.info(`MockApi Server listening in port ${server.address().port}`) )
server.on("error", error => console.error(`Error en servidor ${error}`))
