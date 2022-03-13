class Producto {
    id: number
    timestamp: number
    nombre: string
    descripcion: string
    código: string
    foto: string
    precio: number
    stock: number

    constructor( object ){
        this.id = object.id || Date.now()
        this.timestamp = object.timestamp || Date.now()
        this.nombre = object.nombre
        this.descripcion = object.descripcion
        this.código = object.código
        this.foto = object.foto
        this.precio = object.precio || 0
        this.stock = object.stock || 1
    }
}

export { Producto }