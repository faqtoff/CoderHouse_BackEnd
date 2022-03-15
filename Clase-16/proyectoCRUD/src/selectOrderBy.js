const { options } = require('./utils/options.js');
const knex = require('knex')(options);
//.orderBy('brand')
knex.from('cars').select('*').orderBy('id', 'desc')
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