/* =========================== MODULOS */
const express = require('express');
const {Router} = require('express');

/*=========================== ROUTERS  */
const routerPersonas = new Router();

/*=========================== MIDDLEWARES  */
routerPersonas.use(express.urlencoded({extended: true}));
routerPersonas.use(express.json())
routerPersonas.use((req, res, next) => {
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

module.exports = routerPersonas;