const { options } = require('./utils/options.js');

const { Model } = require('./modelo')

const modeloArticulos = new Model(options)

const listaAutos = [
	{ name: "BMW", cod: "X1", price: 2500000, stock: 5 }, {  name: "Citroen", cod: "3cv", price: 100000, stock: 5 },
	{ name: "Toyota", cod: "Corolla", price: 1000000, stock: 5 }, { name: "Toyota", cod: "sw4", price: 2000000, stock: 5 }
]

modeloArticulos.createTable('articulos')
.then(() => {
    console.info('1 - Tabla Creada')

    return modeloArticulos.insert('articulos', listaAutos)
})
.then(() => {
    console.info('2 - Registros insertados')
    return modeloArticulos.list('articulos')
})
.then((articulos) => {
    console.info('3 - Registros')
    console.table(articulos)
})
.finally(() => {
    modeloArticulos.closeConection();
})

