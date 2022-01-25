const mostrarLetras = (palabra, timeDelay, cb) => {
    let cont = 0
    let iteracion = setInterval(() => {
        console.log(palabra.charAt(cont))
        cont += 1
        if ( cont === palabra.length ) {
            clearInterval(iteracion);
            cb();
        }
    }, timeDelay);
}

mostrarLetras('Holaaa', 0, () => console.log('Listo!'))
mostrarLetras('regergdrg', 1000, () => console.log('Listo!'))
mostrarLetras('Holaadfgedra', 2000, () => console.log('Listo!'))
mostrarLetras('Holaaa', 4000, () => console.log('Listo!'))