import express from "express";
import UsuariosMock from "../mocks/usuario.mock.js";

const usuariosRouter = express.Router()

const objUsuariosMock = new UsuariosMock();

usuariosRouter.get('/popular', (req, res) => {
    console.info('RUN - usuariosRouter.GET("/popular")');
    try {
        const cant = req.query.cant || 50;
        const listaGenerada = objUsuariosMock.popular(cant);
        res.status(200).json({data: listaGenerada});
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: error.message});
    }
})
usuariosRouter.post('/popular', (req, res) => {
    console.info('RUN - usuariosRouter.POST("/popular")');
    try {
        res.status(200).json({msg: 'POST /popular'})
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: error.message});
    }
})

usuariosRouter.get('/', (req, res) => {
    console.info('RUN - usuariosRouter.GET("/")');
    try {
        res.status(200).json({msg: 'GET /'})
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: error.message});
    }
})

export default usuariosRouter