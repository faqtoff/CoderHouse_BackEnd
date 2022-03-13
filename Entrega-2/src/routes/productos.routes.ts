import { ProductList } from "../lib/productLis";
import { Producto } from "../lib/producto";

/* =========================== MODULOS */
const express = require('express');
const {Router} = require('express');
const path = require('path');
const Contenedor = require('../lib/contenedor');

/*=========================== ROUTERS  */
const routerProductos = new Router();

/*=========================== MIDDLEWARES  */
routerProductos.use(express.urlencoded({extended: true}));
routerProductos.use(express.json())
routerProductos.use((req, res, next) => {
    console.log(`Se ejecuta el Midd de Productos, Time: ${Date.now()}`)
    next()
})

/* VARIABLES */
const nombre = './src/data/productos.txt'
const prodFile = new ProductList(nombre)
prodFile.readDB()
/* =========================== RUTAS */

// GET: '/:id?' - Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)
routerProductos.get('/', (req,res) => {
    try {
        const data = async () => await prodFile.contenido
        data().then( list => {
            res.status(200).json(list)
        })
    }
    catch (error) {
        res.status(400).json(error)
    }
})

routerProductos.get('/:id', (req,res) => {
    const id = req.params.id
    try {
        const data = async () => await prodFile.getById(id)
        data().then( list => {
            res.status(200).json(list)
        })
    }
    catch (error) {
        res.status(400).json(error)
    }
})

routerProductos.post('/', (req,res) => {
    try {
        res.status(200).send(prodFile.newProduct(req.body))
    }
    catch (error: any) {
        res.status(404).send('Bad request')
    }
})

routerProductos.put('/:id', (req,res) => {
    const id = req.params.id 
    const prod:Producto = req.body
    if (id) {
        try {
            res.status(200).json(prodFile.updateProduct(Number(id), prod))
        }
        catch {
            res.status(500)
        }
    }
    else {
        res.status(404).send({error: 'Producto no encontrado'})
    }
})

routerProductos.delete('/:id', (req,res) => {
    const id = req.params.id 
    if (id) {
        try {
            res.status(200).json(prodFile.delete(Number(id)))
        }
        catch {
            res.status(500)
        }
    }
    else {
        res.status(404).send({error: 'Producto no encontrado'})
    }
})

export {routerProductos}