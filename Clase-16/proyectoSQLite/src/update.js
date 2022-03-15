const { options } = require('./utils/options.js');
const knex = require('knex')(options);

knex.from('cars').where('id', '=', '4').update({price: 2000000})
    .then(() => {
        console.table('Registro Actualizado')
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