const express = require('express')
const moment = require('moment')

const PORT = 4445;

const app = express();

app.get('/', (req,res) => {
    res.send('<h1 style="color: blue;">Bienvenidos al servisor express</h1>')
})
let visitas = 0;
app.get('/visitas', (req,res) => {
    visitas++;
    res.send(`<h1 style="color: blue;">${visitas}</h1>`)
})
app.get('/fyh', (req,res) => {
    let fecha = moment(new Date()).format("DD/MM/YYYY HH:mm:ss")
    res.send(`<h1 style="color: blue;">${fecha}</h1>`)
})

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.error(`Error en servidor ${error}`))