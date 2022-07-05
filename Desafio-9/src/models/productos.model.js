const knexLib = require('knex')

class Products {
    constructor(options){
        this.knex = knexLib(options)
    }
    createTable(){
        return this.knex.schema.dropTableIfExists('products')
        .catch((error) => {
            const err = new Error({
                codigo: `${error.errno} | ${error.code}`,
                message: error.sqlMessage,
            })
            throw err
        })
        .finally(() => {
            return this.knex.schema.createTable('products', table => {
                table.increments('id');
                table.string('thumbnail');
                table.string('title', 25).notNullable();
                table.float('price');
                table.integer('stock');
            })
        })
    }

    closeConection() {
        return this.knex.destroy();
    }

    insert(articles){
        return this.knex('products').insert(articles)
    }

    list(){
        return this.knex.from('products').select('*')
    }

    findByID(id){
        return knex.from('products').select('*')
        .where('id', '=', id)
        .then((rows) => {
            return rows
        })
        .catch((error) => {
            console.error({
                codigo: `${error.errno} | ${error.code}`,
                message: error.sqlMessage,
            })
            throw error
        })
    }
}

module.exports =  { Products }