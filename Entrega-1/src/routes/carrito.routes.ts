/* =========================== MODULOS */
import { Carrito } from "../lib/carrito";
const express = require('express');
const {Router} = require('express');
const path = require('path');
const Contenedor = require('../lib/contenedor');

/*=========================== ROUTERS  */
const routerCarrito = new Router();

/*=========================== MIDDLEWARES  */
routerCarrito.use(express.urlencoded({extended: true}));
routerCarrito.use(express.json())
routerCarrito.use((req, res, next) => {
    console.info(`Running Carrito, Time: ${Date.now()}`)
    next()
})

/*===========================  Conf Motor */

/* VARIABLES */
const nombre = './src/data/carritos.txt'
const carritoFile = new Contenedor(nombre)
carritoFile.leerContenido()
carritoFile.actualizarId()
/* =========================== RUTAS */

// POST: '/' - Crea un carrito y devuelve su id.
routerCarrito.post('/', (req,res) => {
    console.log(carritoFile)
    const newCart = new Carrito()
    res.status(200).json({
        id: newCart.id,
        message: `Nuevo carrito creado, ID: ${newCart.id}`
    })
})

// DELETE: '/:id' - Vacía un carrito y lo elimina.
routerCarrito.delete('/:id', (req,res) => {
    res.status(200).json({
        message: `Nuevo carrito creado, ID: `
    })
})

/* 
b. DELETE: '/:id' - Vacía un carrito y lo elimina.
c. GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
d. POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
e. DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y 
de producto */

export { routerCarrito }