/* ------------------------ Modulos ------------------------------- */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
/* ------------------------ Instancia de express ------------------------------- */
const app = express();

/* ------------------------ Middlewares  ------------------------------- */
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

/* ------------------------ Conf Motor de plantillas  ------------------------------- */
app.engine('cte', async (filePath, options, callback) =>{
    try {
        const contenido = await fs.promises.readFile(filePath)
        const htmlGenerado = contenido.toString()
            .replace('^^mensaje$$^^', options.mensaje);
        callback(null, htmlGenerado);
    } catch (error) {
        callback(new Error(error), null);
    }
})
/* ------------------------  Ruta Plantillas  ------------------------------- */

app.set('views','./views');

/* ------------------------  conf Extencion   ------------------------------- */
app.set('views engine','cte');

/* ------------------------  Rutas  ------------------------------- */
app.get('/cte1', (req, res) => {
    const datos = { 
        titulo: '(algún título en string)',
        mensaje: '(algún mensaje en string)',
        autor: '(algun autor en string)',
        version: 88
    }    
    res.render('plantilla1', datos)
})

app.get('/cte2', (req, res) => {
    const datos = { 
        nombre: '(algún título en string)',
        apellido: '(algún mensaje en string)',
        fecha: '(algun autor en string)'
    }    
    res.render('plantilla2', datos)
})

/* ------------------------ Servidor ------------------------------- */
const PORT = 7272;
const server = app.listen( PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})