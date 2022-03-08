/* ------------------------ Modulos ------------------------------- */
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const fs = require('fs')
const path = require('path');
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const routerProductos = require('./src/routes/productos.routes');
const Contenedor = require('./src/modules/clases/contenedor');
/* ------------------------ Instancia de express ------------------------------- */
const app = express();
const httpServer = new HttpServer(app)
const io = new IOServer (httpServer)

/* ------------------------ Middlewares  ------------------------------- */
app.use('/', express.static(__dirname + '/public'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, resn, next) => {
    console.log(`Se ejecuta el Midd de app, Time: ${Date.now()}`)
    next()
})

app.use('/productos', routerProductos);

app.use(function (err, req, res, next) {
    console.error( err)
    res.status(500).send('Something broke!')
})
/* ------------------------  Conf Motor  ------------------------------- */
app.set('views', path.join(__dirname, 'src/views'));

app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs'
}))
app.set('view engine', 'hbs');

/* ------------------------ VARIABLES ------------------------ */
const nombre = './src/data/productos.txt'
const archivo = new Contenedor(nombre)
archivo.leerContenido()
archivo.actualizarId()

const mensajes = []
let listArticulos = []
/* Articulos */
try {
    const archivo = new Contenedor (nombre)
    const data = async () => await archivo.findAll()
    data().then( list => {
        listArticulos = list
    })
}
catch (error) {
    console.error(error)
}
/* ------------------------  Socket  ------------------------ */
io.on('connection', (socket) => {
    console.log('Usuario Conectado!', socket.id)
    /* Enviar historico de mensajes */
    socket.emit('mensajes', mensajes)
    /* Recivo */
    socket.on('mensajeNuevo', data => {
        mensajes.push(data)
        /* Actualizo historico de mensajes */
        io.sockets.emit('mensajes', mensajes)
    })


    socket.emit('articulos', listArticulos)
    socket.on('articuloNuevo', data => {
        listArticulos.push(data)
        /* Actualizo historico de mensajes */
        io.sockets.emit('articulos', listArticulos)
    })

})

/* ------------------------ Servidor ------------------------------- */
const PORT = 7272;

const server = httpServer.listen( PORT, () => {
    console.info(`Servidor escuchando en el puerto ${PORT}`)
})

server.on("error", error => console.error(`Error en servidor ${error}`))