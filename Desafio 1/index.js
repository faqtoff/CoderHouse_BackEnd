class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [libros];
        this.mascotas = [mascotas]
    }
    getFullName () {
        console.log(`Nombre y Apellido: ${this.nombre} ${this.apellido}`)
    }
    addMascotas(mascota) {
        let list = []
        this.mascotas.forEach(item => {
            item !== undefined && list.push(item)
        })
        list.push(mascota)
        this.mascotas = list
    }
    countMascotas() {

        console.log(`El usuario tiene ${this.mascotas.length} mascotas`)
    }
    addBook(nombre, autor) {
        let list = []
        this.libros.forEach(item => {
            item !== undefined && list.push(item)
        })
        list.push({
            nombre,
            autor
        })
        this.libros = list
    }
    getBookName() {
        let books = []
        this.libros.forEach(element => {
            books.push(element.nombre)
        });
        console.log(books)
        return books
    }
}

let usuario1 = new Usuario ('Facundo', 'Toffolo')

usuario1.getFullName()
usuario1.addMascotas('Lobo')
usuario1.countMascotas()
usuario1.addBook('JS desde 0', 'Facundo Toffolo')
usuario1.getBookName()

console.log(usuario1)