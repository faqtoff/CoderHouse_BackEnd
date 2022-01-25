let timeout = 2000;
let contador = 0;

console.log(`>>>>>>> Inicio de ejecucion ${new Date()}`);

let procesoRecursivo = setInterval(() => {
    contador += 1
    console.log(`Se ejecuto luego de ${timeout} milisegundos.`);

    if (contador === 5){
        clearInterval(procesoRecursivo)
        console.log(`<<<<<<<< Fin de ejecucion ${new Date()}`)
    }
}, timeout)

console.log(`====== Siguiente bloque de instrucciones ${new Date()}`);