/* =========================== MODULOS */
const express = require('express');
const {Router} = require('express');

/*=========================== ROUTERS  */
const routerMascotas = new Router();

/*=========================== MIDDLEWARES  */
routerMascotas.use(express.urlencoded({extended: true}));
routerMascotas.use(express.json())
routerMascotas.use((req, res, next) => {
    console.log(`Se ejecuta el Midd de mascotas, Time: ${Date.now()}`)
    next()
})


/* =========================== RUTAS */
const mascotas = [];
routerMascotas.get('/', (req,res) => {
    res.status(200).json(mascotas)
})
routerMascotas.post('/', (req,res) => {
    mascotas.push(req.body);
    res.status(200).json({msg: 'Agregado!'})
})

module.exports = routerMascotas;