/* =========================== MODULOS */
const express = require('express');

/*=========================== ROUTERS  */
const routerPersonas = express.Router();

/*=========================== MIDDLEWARES  */

routerPersonas.use(express.json())
routerPersonas.use((req, resn, next) => {
    console.log(`Se ejecuta el Midd de personas, Time: ${Date.now()}`)
    next()
})

/* =========================== RUTAS */
const personas = [];
routerPersonas.get('/', (req,res) => {
    res.status(200).json(personas)

})
routerPersonas.post('/', (req,res) => {
    personas.push(req.body)
    res.status(200).json({msg: 'Agregado!'})
})