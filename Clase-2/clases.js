class Persona {
    constructor (nombre, fecha, direccion) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.direccion = direccion;
    }
    mostrarNombre () {
        console.log(this.nombre)
    }
}

let persona1 = new Persona('Jorge', '22/12/2021', 'Buenos Aires');

console.log(persona1)
persona1.mostrarNombre()