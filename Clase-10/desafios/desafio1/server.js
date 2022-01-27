/* ------------------------ Modulos ------------------------------- */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('fs')
/* ------------------------ Instancia de express ------------------------------- */
const app = express();

/* ------------------------ Middlewares  ------------------------------- */
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

/* ------------------------  Conf Motor  ------------------------------- */
app.set('views', path.join('views'));
app.set('view engine', '');
/* app.set('views', path.join(__dirname, 'views'));

app.engine('pug', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: 'pug'
})) */

/* ------------------------  Rutas  ------------------------------- */
app.get('/ejemplo', (req, res) => {
    const mensaje = 'Desde el backend'
    res.render('inicio.pug', mensaje)
})

/* ------------------------ Servidor ------------------------------- */
const PORT = 7272;

const server = app.listen( PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.error(`Error en servidor ${error}`))