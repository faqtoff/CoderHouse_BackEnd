const fs = require('fs');

/* ======================= [Lectura de Archivos] */
// Directorio nivel inferior
const data1 = fs.readFileSync('./archivos/async_data1.txt', 'utf-8')
console.log(data1);

// Directorio nivel superior
const data2 = fs.readFileSync('../prueba/async_data1.txt', 'utf-8')
console.log(data2);

/* ======================= [Escritura de Archivos] */
fs.writeFileSync('../prueba/async_data1.txt', 'HOLAAAAAAA')

/* ======================= [Agregar Contenido de Archivos] */
fs.appendFileSync('../prueba/async_data1.txt', 'JJAJAJAJAJA XD ')

// Directorio nivel superior
const data3 = fs.readFileSync('../prueba/async_data1.txt', 'utf-8')
console.log(data3);