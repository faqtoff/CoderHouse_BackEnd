// Funcion Variable
let foo = function() {
    console.log("Cuerpo de la fx");
};
foo();

// Funcion autollamada (IIFE)
(function () {
    console.log("Realiza la configuracion inicial");
})();

// Autollamada con valor default
((conf = "default") => {
    console.log("Realiza la configuracion inicial " + conf)
})();

// Autollamada con valor asignado
((conf = "default") => {
    console.log("Realiza la configuracion inicial " + conf)
})("Configuracion Adicional");