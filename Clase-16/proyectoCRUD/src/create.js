const { options } = require('./utils/options.js');
const knex = require('knex')(options);

const listaAutos = [
	{
		"id" : 1,
		"brand" : "BMW",
		"model" : "X1",
		"price" : 2500000
	},
	{
		"id" : 2,
		"brand" : "Citroen",
		"model" : "3cv",
		"price" : 100000
	},
	{
		"id" : 3,
		"brand" : "Toyota",
		"model" : "Corolla",
		"price" : 1000000
	},
	{
		"id" : 4,
		"brand" : "Toyota",
		"model" : "sw4",
		"price" : 2000000
	}
]

knex('cars').insert(listaAutos)
.then(() => {
    console.info('Registros insertados')
})
.catch((error) => {
    console.error({
        codigo: `${error.errno} | ${error.code}`,
        message: error.sqlMessage,
    })
    throw error
})
.finally(() => {
    knex.destroy();
})