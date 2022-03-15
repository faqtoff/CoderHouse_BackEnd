/* =========================== MODULOS */
const express = require('express');
const {Router} = require('express');
const path = require('path');
const { Products } = require('../models/productos.model');
const Contenedor = require('../modules/clases/contenedor');
const { mariaDB } = require('../utils/mariaDB');

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
// const nombre = './src/data/productos.txt'
const archivo = new Products(mariaDB)

/* =========================== RUTAS */

routerProductos.get('/', (req,res) => {
    const id = Number(req.query.id )
    if (id) {
        try {
            archivo.findByID(id)
            .then(rows => {
                const list = JSON.stringify(rows)
                console.log(list)
                // res.status(200).render('partials/productos', list)
            })
            .finally(() => archivo.closeConection() )
            .catch (error => {
                throw new Error(error)
            })
        }
        catch (error) {
            res.status(400).send(error)
        }
    }
    else {
        try {
            archivo.list()
            .then( list => {
                res.status(200).render('partials/productos', {
                    list : list
                }) 
            })
            .finally(() => archivo.closeConection() )
        }
        catch (error) {
            res.status(400).send(error)
        }
    }
})

routerProductos.post('/', (req,res) => {
    const title = req.body.title 
    const price = req.body.price
    const thumbnail = req.body.thumbnail
    
    if(title && price && thumbnail){
        let data = {
            title: title, 
            price: price, 
            thumbnail: thumbnail
        }
        try {
            archivo.insert(data)
            archivo.list()
            .then( list => {
                res.status(200).render('partials/productos', {
                    list : list
                }) 
            })
            .finally(() => archivo.closeConection() )
        }
        catch (error) {
            new Error (error)
        }
    }
    else {
        res.status(404).send('Bad request')
    }
})

/* routerProductos.put(':id', (req,res) => {
    const id = req.query.id 
    console.log(id)
    if (id) {
        try {
            const list = JSON.stringify(archivo.upload(`${id}`,req.query))
            list ? res.status(200).send(list) : res.status(404).send({error: 'Producto no encontrado'})
        }
        catch {
            res.status(200).send([])
        }
    }
}) */

/* routerProductos.delete('/', (req,res) => {
    const id = req.query.id 
    console.log(id)
    if (id) {
        try {
            const list = JSON.stringify(archivo.delete(`${id}`))
            list ? res.status(200).send({msg: 'Producto eliminado'}) : res.status(404).send({error: 'Producto no encontrado'})
        }
        catch {
            res.status(500)
        }
    }
    else {
        res.status(404).send({error: 'Producto no encontrado'})
    }
}) */

module.exports = routerProductos;