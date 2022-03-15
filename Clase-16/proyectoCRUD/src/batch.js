const { options } = require('./utils/options.js');
const knex = require('knex')(options);
const listaAutos = [
	{
		brand: "BMW",
		model: "X1",
		price: 2500000
	},
	{
		brand: "Citroen",
		model: "3cv",
		price: 100000
	},
	{
		brand: "Toyota",
		model: "Corolla",
		price: 1000000
	},
	{
		brand: "Toyota",
		model: "sw4",
		price: 2000000
	}
]

const batch = async () => {
    try {
        console.info('Limpieza de tabla')
        await knex.from('cars').del();
        
        console.info('Insertar Registros')
        await knex.from('cars').insert(listaAutos)

        console.info('Leemos Registros')
        const rows = await knex.from('cars').select('*')
        console.table(rows)

        console.info('Insertar Registros')
        await knex.from('cars').insert(
            {
                brand: "Mitsubishi",
                model: "l200",
                price: 2000000
            }
        )

        
        console.info('Leemos Registros')
        const rows2 = await knex.from('cars').select('*')
        console.table(rows2)

    } catch(error){
        console.error({
            codigo: `${error.errno} | ${error.code}`,
            message: error.sqlMessage,
        })
        throw error
    }
    finally {
        knex.destroy();
    }
}
batch()