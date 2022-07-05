import generarUsuario from "../utils/generarUsuarios.js"
import ContenedorMemoria from "../container/ContenedorMemoria.js"

class UsuariosMock extends ContenedorMemoria {
    constructor () {
        super()
    }

    popular(cant=50) {
        console.info(`UsuariosMock: Generando ${cant} usuarios`)
        const listPopular = []

        for ( let index = 0; index < cant; index++ ) {
            const nuevoUsuario = generarUsuario()
            listPopular.push(nuevoUsuario)
            console.log(nuevoUsuario);
        }

        return listPopular
    }

    guardarPopular(listaGenerada) {
        for (const element of listaGenerada) {
            let newId = 0
            if (this.elementos.length === 0) {
                newId = 1
            }
            if (this.elementos.length > 0) {
                newId = this.elementos[this.elementos.length - 1].id + 1
            }
            this.elementos.push({id: newId, ...element})
        }
        return this.elementos
    }
    
}

export default UsuariosMock