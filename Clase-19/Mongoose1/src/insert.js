const Producto = require('./models/Product');
const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/ecommerce'

mongoose.connect(URL)
.then(async () => {
    try {
        const  prod1 = new Producto({
            name: 'Laptop',
            description: 'Intel core i7',
            price: 255899

        })
        let doc = prod1.save()
        console.log(doc)
    } catch (error) {
        console.error(`Error: ${error}`)
    }
})
.catch((err) => {
    console.error('Error al conectarse a l abase de datos')
})