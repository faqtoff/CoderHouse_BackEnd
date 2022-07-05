 class ContenedorMemoria {
    constructor () {
        this.elementos = []
    }
    
    listar(id){
        const elem = this.elementos.find(e => e.id === id)
        if ( !elem ) {
            throw new Error(`No se encontro el elemento con id ${id}`)
        }
        else {
            return elem
        }
    }

    listAll(){
        return [ ...this.elementos ]
    }

    guardar (elem) {
        let newId = 0

        if (this.elementos.length === 0) {
            newId = 1
        }
        if (this.elementos.length > 0) {
            newId = this.elementos[this.elementos.length - 1].id + 1
        }

        const newElem = { id: newId, ...elem }
        this.elementos.push(newElem)
        return newElem
    }

    actualizar(elem){
        elem.id = Number(elem.id)
        const index = this.elementos.findIndex(e => e.id === elem.id)

        if (index === -1) {
            throw new Error(`No se encontro el elemento con id ${elem.id}`)
        } else {
            this.elementos[index] = elem
            return elem
        }
    }

    borrar(id){
        const index = this.elementos.findIndex(e => e.id === id)

        if (index === -1) {
            throw new Error(`No se encontro el elemento con id ${id}`)
        } else {
            this.elementos.splice(index, 1)
        }
    }

    borrarAll(){
        this.elementos = []
    }
}

export default ContenedorMemoria