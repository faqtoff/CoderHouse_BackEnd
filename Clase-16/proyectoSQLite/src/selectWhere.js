const { options } = require('./utils/options.js');
const knex = require('knex')(options);
// .where('brand', '=', 'BMW').orWhere('model', '=', 'corolla')
// .where('brand', '=', 'BMW').andWhere('model', '=', 'X1')
knex.from('cars').select('*')
    .where('brand', '=', 'toyota').andWhere('model', '=', 'sw4')
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