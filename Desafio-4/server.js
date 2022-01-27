/* ======================== MODULOS ======================== */
const express = require('express');
const bodyParser = require('body-parser');
const Contenedor = require('./modules/clases/contenedor');

/* ======================== INSTANCIA EXPRESS ======================== */
const app = express();

/* ======================== ROUTERS ======================== */
const routerProductos = express.Router();

/*=========================== MIDDLEWARES  */
app.use('/api/productos', routerProductos);

routerProductos.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

/* ======================== RUTAS ======================== */

routerProductos.get('/', (req,res) => {
    try {
        const nombre = 'productos.txt'
        const archivo = new Contenedor (nombre)
        const list = JSON.stringify(archivo.findAll())
        res.status(200).send(list)
    }
    catch {
        res.status(200).send([])
    }
})

routerProductos.get('/random', (req,res) => {
    try {
        const nombre = 'archivos/productos.txt'
        const archivo = new Contenedor (nombre)
        res.status(200).send(archivo.getRandomArbitrary())
    }
    catch {
        res.status(200).send([])
    }
})

/* ======================== SERVER ======================== */
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.error(`Error en servidor ${error}`))