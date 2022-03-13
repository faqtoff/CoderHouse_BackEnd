/* =========================== MODULOS */
import { CarritoList } from "../lib/carritoList";
import { ProductList } from "../lib/productLis";
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
const carritoTxt = './src/data/carritos.txt'
const productosTxt = './src/data/productos.txt'
const carritoFile = new CarritoList(carritoTxt)
const prodFile = new ProductList(productosTxt)
carritoFile.readDB()
prodFile.readDB()
/* =========================== RUTAS */

// POST: '/' - Crea un carrito y devuelve su id.
routerCarrito.post('/', (req,res) => {
    const newCart = carritoFile.newCart()
    res.status(200).json({
        id: newCart,
        message: `Nuevo carrito creado, ID: ${newCart}`
    })
})

// DELETE: '/:id' - Vacía un carrito y lo elimina.
routerCarrito.delete('/:id', (req,res) => {
    const id = req.params.id
    console.log(id)
    res.status(200).json(carritoFile.delete(Number(id)))
})

// GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
routerCarrito.get('/:id/productos', (req,res) => {
    const id = req.params.id
    res.status(200).json(carritoFile.getById(id)?.productos)
})

// POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
// TODO: Manejo de errores
routerCarrito.post('/:id/productos/:id_prod', (req,res) => {
    const { id, id_prod } = req.params
    const prodToAdd = prodFile.getById(id_prod)
    const currentCart = carritoFile.addProductToCartById(id, prodToAdd)
    res.status(200).json(currentCart)
})
// DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto
/* routerCarrito.delete('/:id/productos/:id_prod', (req,res) => {
    const { id, id_prod } = req.params
    const currentCart = carritoFile.getById(id)
    currentCart?.deleteById(id_prod)
    carritoFile.refreshDB()
    res.status(200).json(carritoFile.delete(Number(id)))
})
 */
export { routerCarrito }