import mongoose from "mongoose";
import UsuarioModel from "./models/Usuarios.model.js";

const URL = "mongodb+srv://faqtoff:faq1234@cluster0.kixqh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(URL)
.then(() => {
    //-------------------------------------------------------------------------------------
    /* Registrar usuarios */
    //-------------------------------------------------------------------------------------
    try {
        const listaUsuarios = [
            { nombre: 'Lucas', apellido: 'Blanco', dni: '30355874' },
            { nombre: 'María', apellido: 'García', dni: '29575148' },
            { nombre: 'Tomas', apellido: 'Sierra', dni: '38654790' },
            { nombre: 'Carlos', apellido: 'Fernández', dni: '26935670' }
        ]
        for (const usuario of listaUsuarios) {
            const obj = new UsuarioModel(usuario)
            obj.save()
        }
    }
    catch (error) {
        console.error(err)
    }
    //-------------------------------------------------------------------------------------
    /* Listar usuarios registrados en la consola */
    //-------------------------------------------------------------------------------------

    UsuarioModel.find({})
    .then((usuarios) => {
        usuarios.forEach( usuario => {
            console.table(JSON.stringify(usuario))
        })
    })
})
.catch((err) => {
    console.error(err)
})