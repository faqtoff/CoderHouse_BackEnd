/* ------------------------ Modulos ------------------------------- */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
const path = require('path');
/* ------------------------ Instancia de express ------------------------------- */
const app = express();

/* ------------------------ Middlewares  ------------------------------- */
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

/* ------------------------  Conf Motor  ------------------------------- */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// http://localhost:7272/datos?titulo=hola&nivel=5&min=0&max=10
/* ------------------------  Rutas  ------------------------------- */
app.get('/datos', (req, res) => {
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