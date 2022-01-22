function crearConfiguracion (dispositivo) {
    return function (version) {
        console.log(`Èl dispositivo ${dispositivo} ha inicializado con la version ${version}`)
    }
}

// Envio la variable dispositivo al scope de la funcion y me devuelve otra funcion 
// Recibe una definicion junto a una memoria
let fxConfiguracion = crearConfiguracion('Samsung Galaxy S21');

// Ejecuto la funcion que me devolvio 
fxConfiguracion(' Ultra')