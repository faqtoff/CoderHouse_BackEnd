const fs = require('fs');

//crear clase que reciba el nombre del archivo

class Contenedor {
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    }

    //crear metodo que reciba un objeto, lo guardo en un archivo y devuelvo el id asignado
    save(objeto) {
        let contenido = JSON.stringify(objeto);
        let id = Date.now()
        fs.writeFileSync(this.nombreArchivo, contenido);
        return id;
    }

    //crear metodo que reciba un id y devuelva el objeto correspondiente o null si no existe
    findById(id) {
        let contenido = fs.readFileSync(this.nombreArchivo, 'utf-8');
        let objetos = [JSON.parse(contenido)];
        let objeto = objetos.find(obj => obj.id == id);
        return objeto;
    }

    //devolver un array con todos los objetos del archivo
    findAll() {
        let contenido = fs.readFileSync(this.nombreArchivo, 'utf-8');
        let objetos = JSON.parse(contenido);
        return objetos;
    }

    //eliminar del archivo el objeto con el id recibido
    delete(id) {
        let contenido = fs.readFileSync(this.nombreArchivo, 'utf-8');
        let objetos = JSON.parse(contenido);
        let objeto = objetos.find(obj => obj.id == id);
        let indice = objetos.indexOf(objeto);
        objetos.splice(indice, 1);
        fs.writeFileSync(this.nombreArchivo, JSON.stringify(objetos));
    }

    //elimina todos los objetos del archivo
    deleteAll() {
        fs.writeFileSync(this.nombreArchivo, '[]');
    }

}

async function cargarArchivo () {
    const nombre = 'desafio2.txt'
    const archivo = new Contenedor (nombre)

    console.log('1 - Guardar Objeto')
    const objeto = {
        title: 'Maceta',
        price: 200,
        thumbnail: '',
        id: 1
    }
    try {
        console.log(`1 - ID: ${archivo.save(objeto)}`)
    } 
    catch (error) {
        console.log(error)
    }

    console.log('Mostrar Todos')
    try {
        const todos = archivo.findAll()
        console.log(todos)
    } 
    catch (error) {
        console.log(error)
    }

    console.log('3 - Mostrar por ID')
    try {
        const objetoById = archivo.findById(1)
        console.log(objetoById)
    } 
    catch (error) {
        console.log(error)
    }
/*     console.log('Mostrar Todos')
    try {
        const todos = archivo.findAll()
        console.log(todos)
    } 
    catch (error) {
        console.log(error)
    }

    console.log('2 - Eliminar por ID')
    try {
        archivo.delete(1)
    } 
    catch (error) {
        console.log(error)
    }

    console.log('Mostrar Todos')
    try {
        const todos = archivo.findAll()
        console.log(todos)
    } 
    catch (error) {
        console.log(error)
    }

    console.log('2 - Eliminar Todos')
    try {
        archivo.deleteAll()
    } 
    catch (error) {
        console.log(error)
    }

    console.log('Mostrar Todos')
    try {
        const todos = archivo.findAll()
        console.log(todos)
    } 
    catch (error) {
        console.log(error)
    } */
}
cargarArchivo()