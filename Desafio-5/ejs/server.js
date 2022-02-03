/* ------------------------ Modulos ------------------------------- */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
const path = require('path');
const routerProductos = require('./src/routes/productos.routes');
/* ------------------------ Instancia de express ------------------------------- */
const app = express();

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
app.set('view engine', 'ejs');

/* ------------------------  Rutas  ------------------------------- */
app.get('/datos', (req, res) => {
    // http://localhost:7272/datos?titulo=hola&nivel=5&min=0&max=10
    const  datos = {
        titulo: req.query.titulo,
        min: req.query.min,
        max: req.query.max,
        nivel: req.query.nivel
    }
    console.log(req.query)
    res.render('medidor', datos)
})

/* ------------------------ Servidor ------------------------------- */
const PORT = 7272;

const server = app.listen( PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.error(`Error en servidor ${error}`))