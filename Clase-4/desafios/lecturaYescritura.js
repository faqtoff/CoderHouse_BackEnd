const fs = require('fs')

try {
    fs.readFile('../archivos/package.json', 'utf-8', (error, contenido) => {
        if(error) {
            throw new Error(error)
        }
        else {

            const info = {
                contenidoStr: contenido,
                contenidoObj: JSON.parse(contenido), // STR a OBJ
                autor: ''
            }
            console.log(JSON.stringify(info, null, 2)); // OBJ a STR

            fs.writeFile('../archivos/info.txt', JSON.stringify(info, null, 2), error => {
                if(error) {
                    throw new Error(error)
                }
                else {
                    console.log('Finalizado')
                }
            })
        }
    })
} catch (error) { console.log(error); }