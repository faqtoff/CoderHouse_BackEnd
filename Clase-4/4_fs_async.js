const fs = require('fs');

try {
    fs.readFile('./archivos/async_data1.txt', 'utf-8', (error, contenido) => {
        if(error) {
            throw new Error ('No se pudo leer')
        } else {
            console.log(contenido)
        }
    })
} catch (error) { console.log(error) }