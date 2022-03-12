import { Producto } from "./producto"

class Carrito {
    id: number
    timestap: number
    productos: []

    constructor (){
        this.id = Date.now(),
        this.timestap = Date.now(),
        this.productos = []
    }
}

export { Carrito }