// 1
function mostrarLista(lista) {
    if (lista?.length != ''){
        console.log(lista)
    } 
    else {
        console.log('Lista vacia')
    }
}

mostrarLista([1,2,3]);
mostrarLista([]);

// 2
( (lista = []) => {
    if (lista.length != '') {
        console.log(lista)
    } 
    else {
        console.log('Lista vacia')
    }
})([4,5,3]);

// 3
function crearMultiplicador (numero1) {
    return function (numero2) {
        console.log(numero1*numero2)
    }
};

let duplicar    = crearMultiplicador(2);
let triplicar   = crearMultiplicador(3);

duplicar(3);
triplicar(3);