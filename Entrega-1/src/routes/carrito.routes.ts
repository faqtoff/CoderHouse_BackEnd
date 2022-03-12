/* =========================== MODULOS */
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
    console.log(`Se ejecuta el Midd de Carrito, Time: ${Date.now()}`)
    next()
})

/*===========================  Conf Motor */

/* VARIABLES */
const nombre = './src/data/productos.txt'
const archivo = new Contenedor (nombre)
archivo.leerContenido()
archivo.actualizarId()
/* =========================== RUTAS */

routerCarrito.get('/', (req,res) => {
    const id = req.query.id 
    if (id) {
        try {
            const list = JSON.stringify(archivo.findById(`${id}`))
            list ? res.status(200).render('productos', list).send(list) : res.status(404).send({error: 'Producto no encontrado'})
        }
        catch {
            res.status(200).render('productos')
            //res.status(200).send([])
        }
    }
    else {
        try {
            const archivo = new Contenedor (nombre)
            const data = async () => await archivo.findAll()
            data().then( list => {
                res.render('productos',{
                    list : list
                })
            })
        }
        catch {
            // res.status(200).render('productos')
        }
    }
})

routerCarrito.post('/', (req,res) => {
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
            JSON.stringify(archivo.save(data))
            let list = archivo.findAll()
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

routerCarrito.put(':id', (req,res) => {
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
})

routerCarrito.delete('/', (req,res) => {
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
})

export { routerCarrito }