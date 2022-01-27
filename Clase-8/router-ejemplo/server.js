/* =========================== MODULOS */
const express = require('express');

/*=========================== ROUTERS  */
const routerRutas1 = express.Router();
const routerRutas2 = express.Router();
/* =========================== INSTANCIA DE EXPRESS */
const app = express();
/*=========================== MIDDLEWARES  */
app.use('/api/router1', routerRutas1);
app.use('/api/router2', routerRutas2);

/* =========================== RUTAS */

/* Router 1 */
routerRutas1.get('/recurso1', (req,res) => {
    res.send('Consumo ruta /recurso1 en router1')
})
routerRutas1.get('/', (req,res) => {
    res.send('Consumo ruta base en router1')
})
/* Router 2 */
routerRutas2.get('/recurso2', (req,res) => {
    res.send('Consumo ruta /recurso1 en router2')
})
routerRutas2.get('/', (req,res) => {
    res.send('Consumo ruta base en router2')
})


/* =========================== SERVIDOR */
const PORT = 7070;
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.error(`Error en servidor ${error}`))