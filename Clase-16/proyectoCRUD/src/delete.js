const { options } = require('./utils/options.js');
const knex = require('knex')(options);

knex.from('cars').del()
    .then(() => {
        console.table('Registro Eliminado')
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