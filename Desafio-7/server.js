/* ------------------------ Modulos ------------------------------- */
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const fs = require('fs')
const path = require('path');
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const routerProductos = require('./src/routes/productos.routes');
const { mariaDB } = require('./src/utils/mariaDB');
const { sqLite } = require('./src/utils/SQLite');
const { Products } = require('./src/models/productos.model');
const { Messages } = require('./src/models/messages.model');
/* ------------------------ Instancia de express ------------------------------- */
const app = express();
const httpServer = new HttpServer(app)
const io = new IOServer (httpServer)

/* DB articulos */

let articulos = new Products(mariaDB)
articulos.createTable()
.then(() => {
    return articulos.insert([
        {
            title:"Globo Terráqueo","price":345.67,
            thumbnail:"https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
        },
        {
            title:"Escuadra",
            price:123.45,
            thumbnail:"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
        }
    ])
})
.finally(() => articulos.closeConection() )
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

/* ------------------------  Socket  ------------------------ */
io.on('connection', (socket) => {
    console.log('Usuario Conectado!', socket.id)
    /* DB messages */
    let messages = new Messages(sqLite)
    messages.createTable()
    .then(() => {
        return messages.list()
    })
    .then((message) => {
        socket.emit('mensajes', message)
    })
    .finally(() => messages.closeConection() )
    // Enviar historico de mensajes
    // Recivo
    socket.on('mensajeNuevo', data => {
        let messages = new Messages(sqLite)
        return messages.insert(data)
        .then(() => {
            return messages.list()
        })
        .then((message) => {
            socket.emit('mensajes', message)
        })
        .finally(() => articulos.closeConection() )
    })

    let articulos = new Products(mariaDB)
    articulos.list()
    .then(listArticulos => {
        socket.emit('articulos', listArticulos)
    })
    .finally(() => articulos.closeConection() )

    socket.on('articuloNuevo', data => {
        let articulos = new Products(mariaDB)
        return articulos.insert(data)
        .then(() => {
            return articulos.list()
        })
        .then(listArticulos => {
            socket.emit('articulos', listArticulos)
        })
        .finally(() => articulos.closeConection() )
        // Actualizo historico de mensajes 
    })

})

/* ------------------------ Servidor ------------------------------- */
const PORT = 8080;

const server = httpServer.listen( PORT, () => {
    console.info(`Servidor escuchando en el puerto ${PORT}`)
})

server.on("error", error => console.error(`Error en servidor ${error}`))