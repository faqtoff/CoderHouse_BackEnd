const fs = require('fs');

const fecha = new Date
let data = ''

try {
    /* ======================= [Escritura de Archivos] */
    fs.appendFileSync('../archivos/fyh.txt', fecha.toDateString())
    console.log(`Escritura ${fecha.toDateString()}`);

    try {
        /* ======================= [Lectura de Archivos] */
        data = fs.readFileSync('../archivos/fyh.txt', 'utf-8')
        console.log(`Lectura: ${data}`);
    } catch (err) { throw new Error ('No se pudo leer el archivo') }
    
} catch (error) { 
    console.log(error)
    console.log('Error al crear el archivo')
}