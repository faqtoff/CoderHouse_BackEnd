/* =========================== MODULOS */
const express = require('express');

/*=========================== ROUTERS  */
const routerPersonas  = require('./src/routes/personas.routes')
const routerMascotas = require('./src/routes/mascotas.routes')
/* =========================== INSTANCIA DE EXPRESS */
const app = express();
/*=========================== MIDDLEWARES  */
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});
app.use('/api/personas', routerPersonas);
app.use('/api/mascotas', routerMascotas);

/* Error */
app.use(function (err, req, res, next) {
    console.error( err)
    res.status(500).send('Something broke!')
})


/* =========================== SERVIDOR */
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.error(`Error en servidor ${error}`))