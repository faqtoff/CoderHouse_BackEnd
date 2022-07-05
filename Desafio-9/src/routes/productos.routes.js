/* =========================== MODULOS */
import Express, { Router } from "express";
import productosMid from "../middlewares/productos.js";
import ProductosMock from "../mocks/productos.mock.js";

// const { Products } = require("../models/productos.model");
// const { mariaDB } = require("../utils/mariaDB");
// const { getProductosHandler } = require("../handlers/getProductos.handler");
// const { postProductosHandler } = require("../handlers/postProductos.handler");
// const { deleteProductByID } = require("../handlers/deleteProductByID.handler");
// const { putProductByID } = require("../handlers/putProductByID.handler");

/*=========================== ROUTERS  */
const routerProductos = new Router();

/*=========================== MIDDLEWARES  */
routerProductos.use(Express.urlencoded({ extended: true }));
routerProductos.use(Express.json());
routerProductos.use((req, res, next) => productosMid(req, res, next));

/* VARIABLES */
// const nombre = './src/data/productos.txt'
// const archivo = new Products(mariaDB)

/* =========================== RUTAS */

// routerProductos.get("/", (req, res) => getProductosHandler(req, res, archivo));
// routerProductos.post("/", (req, res) => postProductosHandler(req, res, archivo) );
// routerProductos.put(':id', (req, res) => putProductByID(req,res))
// routerProductos.delete('/', (req,res) => deleteProductByID(req,res))

const objProductosMock = new ProductosMock();
routerProductos.get("/api/productos-test", (req, res) => {
  console.info('RUN - routerProductos.GET("/api/productos-test")');
  try {
    const cant = req.query.cant || 5;
    const listaGenerada = objProductosMock.getAll(cant);
    res.status(200).json({ data: listaGenerada });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

export default routerProductos;
