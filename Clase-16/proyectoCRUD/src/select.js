const { options } = require('./utils/options.js');
const knex = require('knex')(options);

knex.from('cars').select('*')
    .then((rows) => {
        console.table(rows)
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