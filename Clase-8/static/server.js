/* =========================== MODULOS */
const express = require('express');
const bodyParser = require('body-parser')
/* =========================== INSTANCIA DE EXPRESS */
const app = express();
/*=========================== MIDDLEWARES  */
app.use(express.static('public'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
/* =========================== SERVIDOR */
app.post('/guardar', (req,res) => {
    let nombre = `${req.body.nombre} ${req.body.apellido}`
    res.status(200).send(nombre)
})

/* =========================== SERVIDOR */
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.error(`Error en servidor ${error}`))