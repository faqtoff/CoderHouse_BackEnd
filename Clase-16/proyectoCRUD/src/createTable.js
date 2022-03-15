const { options } = require('./utils/options.js');
const knex = require('knex')(options);

knex.schema.createTable('cars', table => {
    table.increments('id');
    table.string('brand', 25).notNullable();
    table.string('model', 25).notNullable();
    table.integer('price')
})
.then(() => { console.log('Tabla Creada!') })
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