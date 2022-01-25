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
app.set('view engine','cte');

/* ------------------------  Rutas  ------------------------------- */
app.get('/ejemplo', (req, res) => {
    const datos = {
        mensaje: 'Hola Coders! Cdsadsksk BD'
    }
    res.render('plantilla', datos)
    // res.send('ruta ejemplo get');
})

/* ------------------------ Servidor ------------------------------- */
const PORT = 7272;

const server = app.listen( PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})