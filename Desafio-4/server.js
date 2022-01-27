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
app.use('/', express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use((req, resn, next) => {
    console.log(`Se ejecuta el Midd de personas, Time: ${Date.now()}`)
    next()
})

routerProductos.use(express.json())

/* VARIABLES */
const nombre = './archivos/productos.txt'
const archivo = new Contenedor (nombre)
archivo.leerContenido()
archivo.actualizarId()
/* ======================== RUTAS ======================== */

routerProductos.get('/', (req,res) => {
    const id = req.query.id 
    console.log(id)
    if (id) {
        try {
            const list = JSON.stringify(archivo.findById(`${id}`))
            list ? res.status(200).send(list) : res.status(404).send({error: 'Producto no encontrado'})
        }
        catch {
            res.status(200).send([])
        }
    }
    else {
        try {
            const archivo = new Contenedor (nombre)
            const list = JSON.stringify(archivo.findAll())
            res.status(200).send(list)
        }
        catch {
            res.status(200).send([])
        }
    }
})

routerProductos.post('/', (req,res) => {
    const title = req.query.title 
    const price = req.query.price
    const thumbnail = req.query.thumbnail
    
    if(title && price && thumbnail){
        console.log({title, price, thumbnail})
        let data = {
            title: title, 
            price: price, 
            thumbnail: thumbnail
        }
        try {
            const list = JSON.stringify(archivo.save(data))
            list ? res.status(200).send({msg: 'Archivo Guardado', data:list }) : res.status(404).send({error: 'Producto no encontrado'})
        }
        catch (error) {
            res.status(200).send(error)
        }
    }
    else {
        res.status(404).send('Bad request')
    }
})

routerProductos.put(':id', (req,res) => {
    try {
        res.status(200).send(archivo.getRandomArbitrary())
    }
    catch {
        res.status(200).send([])
    }
})

routerProductos.delete('/', (req,res) => {
    const id = req.query.id 
    console.log(id)
    if (id) {
        try {
            const list = JSON.stringify(archivo.delete(`${id}`))
            list ? res.status(200).send({msg: 'Producto eliminado'}) : res.status(404).send({error: 'Producto no encontrado'})
        }
        catch {
            res.status(500)
        }
    }
    else {
        res.status(404).send({error: 'Producto no encontrado'})
    }
})
/* ======================== SERVER ======================== */
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.error(`Error en servidor ${error}`))