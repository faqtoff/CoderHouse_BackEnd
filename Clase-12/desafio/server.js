/* ------------------------ Modulos ------------------------------- */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
const path = require('path')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
/* ------------------------ Instancia de express ------------------------------- */
const app = express();
const httpServer = new HttpServer(app)
const io = new IOServer (httpServer)

/* ------------------------ Middlewares  ------------------------------- */
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

/* ------------------------  Conf Motor  ------------------------------- */
app.set('views', path.join('views'));
app.set('view engine', '');

/* ------------------------  Socket  ------------------------------- */
const mensajes = []

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
})

/* ------------------------ Servidor ------------------------------- */
const PORT = 4334;

const server = httpServer.listen( PORT, () => {
    console.info(`Servidor escuchando en el puerto ${PORT}`)
})

server.on("error", error => console.error(`Error en servidor ${error}`))