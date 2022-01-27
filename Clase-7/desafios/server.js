const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const frase = 'Hola mundo!'
/* RUTAS */
app.get('/api/frase', (req,res) => {
    res.send(frase)
})
app.post('/api/frase', (req,res) => {
    frase = req.body.contenido;
    res.send(frase)
})

app.get('/api/letras/:num', (req,res) => {
    try {
        res.send(frase)
    }
    catch {
        res.send(`<p>${[]}</p>`)
    }
})
app.get('/api/palabras/:num', (req,res) => {
    try {
        res.send(frase)
    }
    catch {
        res.send(`<p>${[]}</p>`)
    }
})

/* SERVER */
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.error(`Error en servidor ${error}`))