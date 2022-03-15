const knexLib = require('knex')

class Model {
    constructor(options){
        this.knex = knexLib(options)
    }
    createTable(table){
        return this.knex.schema.dropTableIfExists(table)
        .catch((error) => {
            const err = new Error({
                codigo: `${error.errno} | ${error.code}`,
                message: error.sqlMessage,
            })
            throw err
        })
        .finally(() => {
            return this.knex.schema.createTable(table, table => {
                table.increments('id');
                table.string('name', 25).notNullable();
                table.string('cod', 25).notNullable();
                table.float('price');
                table.integer('stock');
            })
        })
    }

    closeConection() {
        return this.knex.destroy();
    }

    insert(table, articles){
        return this.knex(table).insert(articles)
    }

    list(table){
        return this.knex.from(table).select('*')
    }
}

module.exports= { Model }