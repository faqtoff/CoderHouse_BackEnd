let timeout = 5000;

console.log(`>>>>>>> Inicio de ejecucion ${new Date()}`);

let delay = setTimeout(() => {
    console.log(`Se ejecuto luego de ${timeout} milisegundos.`);
    console.log(`<<<<<<<< Fin de ejecucion ${new Date()}`)
}, timeout)

console.log(`====== Siguiente bloque de instrucciones ${new Date()}`);