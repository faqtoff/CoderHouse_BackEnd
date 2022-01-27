/* =========================== MODULOS */
const express = require('express');
const bodyParser = require('body-parser')

/*=========================== ROUTERS  */
const routerMascotas = require('./src/routers/mascotas.routes')
const routerPersonas = require('./src/routers/personas.routes')
/* =========================== INSTANCIA DE EXPRESS */
const app = express();


app.use(express.urlencoded({extended: true}));

app.use('/api/personas', routerPersonas);
app.use('/api/mascotas', routerMascotas);

app.use((req, resn, next) => {
    console.log(`Se ejecuta el Midd de personas, Time: ${Date.now()}`)
    next()
})
/* =========================== SERVIDOR */
const PORT = 7071;
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.error(`Error en servidor ${error}`))