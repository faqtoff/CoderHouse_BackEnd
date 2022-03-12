import express from "express";
import UsuariosMock from "../mocks/usuario.mock.js"

const usuariosRouter = express.Router()

const objUsuariosMock = new UsuariosMock();

usuariosRouter.get('/popular', (req, res) => {
    const cant = req.query.cant
    res.json(objUsuariosMock.popular(cant))
})
usuariosRouter.post('/popular', (req, res) => {
    res.json({msg: 'post /popular'})

})
usuariosRouter.get('/', (req, res) => {
    res.json({msg: 'GET /popular'})

})
usuariosRouter.post('/popular', (req, res) => {

})
usuariosRouter.get('/', (req, res) => {

})
usuariosRouter.get('/:id', (req, res) => {

})

export default usuariosRouter