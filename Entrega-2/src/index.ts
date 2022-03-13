/* ------------------------ Modulos ------------------------------- */
import express from 'express'
import bodyParser from'body-parser';
import fs from 'fs';
import path from 'path';
import { routerProductos } from './routes/productos.routes';
import { routerCarrito } from './routes/carrito.routes';
/* ------------------------ Instancia de express ------------------------------- */
const app = express();

/* ------------------------ Middlewares  ------------------------------- */
app.use('/', express.static(__dirname + '/public'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, resn, next) => {
    console.info(`Running App, Time: ${Date.now()}`)
    next()
})
app.use('/api/productos', routerProductos);
app.use('/api/carrito', routerCarrito);

app.use(function (err, req, res, next) {
    console.error(err)
    res.status(500).send('Something broke!')
})

/* ------------------------ Servidor ------------------------------- */
const PORT = 8080;

const server = app.listen( PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.error(`Error en servidor ${error}`))