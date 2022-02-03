const express = require('express')

const PORT = 8080;

const app = express();

app.get('/producto', (req,res) => {
    res.send('<h1 style="color: blue;">Lista de productos</h1>')
})
app.post('/producto', (req,res) => {
    res.send('<h1 style="color: blue;">Agrega un producto</h1>')
})
app.put('/producto', (req,res) => {
    res.send('<h1 style="color: blue;">Modifica un producto</h1>')
})
app.delete('/producto', (req,res) => {
    res.send('<h1 style="color: blue;">Elimina un producto</h1>')
})

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.error(`Error en servidor ${error}`))