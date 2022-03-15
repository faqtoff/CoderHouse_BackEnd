import { Producto } from "./producto";
const fs = require('fs');

class ProductList {
    nombreArchivo: string
    lastId: number
    contenido: Producto []
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
        this.lastId = 0
        this.contenido = []
    }
    getById(id: number):Producto {
        return this.contenido.find(obj => obj.id == id) || new Producto({})
    }
    //crear metodo que reciba un objeto, lo guardo en un archivo y devuelvo el id asignado
    newProduct(object) {
        const id = this.lastId += 1
        this.lastId = this.lastId
        this.contenido.push(new Producto({id, ...object}))
        
        let newContent = JSON.stringify(this.contenido)
        fs.writeFileSync(this.nombreArchivo, newContent);
        return {id, message: `Nuevo producto creado con el ID: ${id}`};
    }
    // Leer el contenido
    readDB(){
        let contenido = fs.readFileSync(this.nombreArchivo, 'utf-8');
        this.contenido = JSON.parse(contenido)
        
        // Actualizar contador de id
        if ( this.contenido.length > 0){
            const array = this.contenido.sort(function(a, b) {
                return b.id - a.id;
            })
            this.lastId = array[0].id
        }
    }
    // Elimina un carrito
    delete(id: number){
        try{
            let objeto = this.contenido.find(obj => obj.id == id);
            let indice = objeto && this.contenido.indexOf(objeto);

            if ( indice != undefined ){ 
                this.contenido.splice(indice, 1)
                fs.writeFileSync(this.nombreArchivo, JSON.stringify(this.contenido));
                return { message: `El producto ${id} se elimino correctamente` }
            }
            else return { message: `El producto ${id} no existe` }
        }
        catch {
            return new Error(`Error al eliminar producto`)
        }
    }
    // Update Product
    updateProduct(id:number, object:Producto) {
        this.delete(id)
        this.contenido.push(new Producto(object))
        
        let newContent = JSON.stringify(this.contenido)
        fs.writeFileSync(this.nombreArchivo, newContent);
        return {id, message: `Producto ${id} actualizado`};
    }
}

export {ProductList}