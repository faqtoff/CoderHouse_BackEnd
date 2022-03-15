const knexLib = require('knex')

class Messages {
    constructor(options){
        this.knex = knexLib(options)
    }
    createTable(){
        return this.knex.schema.dropTableIfExists('messages')
        .catch((error) => {
            const err = new Error({
                codigo: `${error.errno} | ${error.code}`,
                message: error.sqlMessage,
            })
            throw err
        })
        .finally(() => {
            return this.knex.schema.createTable('messages', table => {
                table.increments('id');
                table.string('mensaje');
                table.string('email', 25).notNullable();
                table.string('name');
                table.string('fecha');
            })
        })
    }

    closeConection() {
        return this.knex.destroy();
    }

    insert(articles){
        return this.knex('messages').insert(articles)
    }

    list(){
        return this.knex.from('messages').select('*')
    }
}

module.exports= { Messages }