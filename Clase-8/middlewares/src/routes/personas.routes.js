/* =========================== MODULOS */
const express = require('express');

const routerPersonas = express.Router();

/*=========================== MIDDLEWARES  */
routerPersonas.use(express.urlencoded({extended: true}));
routerPersonas.use(express.json())
routerPersonas.use((req, res, next) => {
    console.log(`Se ejecuta el Midd de personas, Time: ${Date.now()}`)
    next()
})

/* =========================== RUTAS */

/* routerPersonas */
const personas = [];
routerPersonas.get('/', (req,res) => {
    res.status(200).json(personas)

})
routerPersonas.post('/', (req,res) => {
    personas.push(req.body)
    res.status(200).json({msg: 'Agregado!'})
})
routerPersonas.get('/error', (req, res, next) => {
    try {
        throw new Error('Error en personas')
    } catch (error) {
        next(error);
    }
})

module.exports = routerPersonas;