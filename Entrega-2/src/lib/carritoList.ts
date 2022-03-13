import { Carrito } from "./carrito";
import { Producto } from "./producto";
const fs = require('fs');

class CarritoList {
    nombreArchivo: string
    lastId: number
    contenido: Carrito []
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
        this.lastId = 0
        this.contenido = []
    }
    getById(id: number){
        return this.contenido.find(obj => obj.id == id)
    }
    //crear metodo que reciba un objeto, lo guardo en un archivo y devuelvo el id asignado
    newCart() {
        const id = this.lastId += 1
        this.lastId = this.lastId
        const cart = new Carrito(id)
        this.contenido.push(cart)
        
        let newContent = JSON.stringify(this.contenido)
        fs.writeFileSync(this.nombreArchivo, newContent);
        return cart;
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
                return { message: `El carrito ${id} se elimino correctamente` }
            }
            else return { message: `El carrito ${id} no existe` }
        }
        catch {
            return new Error(`Error al eliminar archivo del carrito`)
        }
    }
    addProductToCartById(id: number, prod: Producto){
        const cart:Carrito = this.contenido.find(obj => obj.id == id) || this.newCart()
        cart.addProduct(prod)
        return cart
    }
    // Guarda el estado actual en la DB
    refreshDB(){
        fs.writeFileSync(this.nombreArchivo, this.contenido)
    }
    
}

export {CarritoList}