import { Producto } from "./producto"

class Carrito {
    id: number
    timestap: number
    productos: Producto[]

    constructor (id){
        this.id = id,
        this.timestap = Date.now(),
        this.productos = []
    }
    addProduct(item:Producto) {
        this.productos.push(item)
        return { message: `El articulo ${item.id} se agrego con exito al carrito ${this.id}`}
    }
    deleteById(id: number){
        try{
            let objeto = this.productos.find(obj => obj.id == id);
            let indice = objeto && this.productos.indexOf(objeto);

            if ( indice != undefined ){ 
                this.productos.splice(indice, 1)
                return { message: `El producto ${id} se elimino correctamente` }
            }
            else return { message: `El producto ${id} no existe` }
        }
        catch {
            return new Error(`Error al eliminar producto`)
        }
    }
}

export { Carrito }