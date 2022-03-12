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
const stockFile = new Contenedor (nombre)
stockFile.leerContenido()
stockFile.actualizarId()
/* =========================== RUTAS */

routerProductos.get('/', (req,res) => {
    try {
        const data = async () => await stockFile.findAll()
        data().then( list => {
            res.json(list)
        })
    }
    catch {
        res.status(400)
    }
})

routerProductos.get('/:id', (req,res) => {
    const id = req.params.id
    try {
        const archivo = new Contenedor (nombre)
        const data = async () => await archivo.findById(id)
        data().then( list => {
            res.json(list)
        })
    }
    catch {
        res.status(400)
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
            JSON.stringify(stockFile.save(data))
            let list = stockFile.findAll()
            res.render('productos',{
                list : list
            })
        }
        catch (error: any) {
            new Error (error)
        }
    }
    else {
        res.status(404).send('Bad request')
    }
})

routerProductos.put(':id', (req,res) => {
    const id = req.query.id 
    console.log(id)
    if (id) {
        try {
            const list = JSON.stringify(stockFile.upload(`${id}`,req.query))
            list ? res.status(200).send(list) : res.status(404).send({error: 'Producto no encontrado'})
        }
        catch {
            res.status(200).send([])
        }
    }
})

routerProductos.delete('/', (req,res) => {
    const id = req.query.id 
    console.log(id)
    if (id) {
        try {
            const list = JSON.stringify(stockFile.delete(`${id}`))
            list ? res.status(200).send({msg: 'Producto eliminado'}) : res.status(404).send({error: 'Producto no encontrado'})
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