/* =========================== MODULOS */
const express = require('express');

/*=========================== ROUTERS  */
const routerMascotas = express.Router();

/*=========================== MIDDLEWARES  */

routerMascotas.use(express.json())
routerMascotas.use((req, resn, next) => {
    console.log(`Se ejecuta el Midd de mascotas, Time: ${Date.now()}`)
    next()
})


/* =========================== RUTAS */
const mascotas = [];
routerMascotas.get('/', (req,res) => {
    res.status(200).json(mascotas)
})
routerMascotas.post('/', (req,res) => {
    
})
