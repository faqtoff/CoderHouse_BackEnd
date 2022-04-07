const { Schema, model } = require('mongoose')

const productoSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    }
})

const productoModel = model('Products', productoSchema);

module.exports = productoModel;