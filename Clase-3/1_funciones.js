// Tradicional
function tradicional (texto1, texto2) {
    let textoConcatenado = `${texto1} ${texto2}`
    return textoConcatenado
}
console.log(tradicional('1 hola', 'Mundo!'))

// Asignada
const fxTradicional = function (texto1, texto2) {
    let textoConcatenado = `${texto1} ${texto2}`
    return textoConcatenado
}
console.log(fxTradicional('2 hola', 'Mundo!'))

// Arrow Function
const fxArrow = (texto1, texto2) => {
    let textoConcatenado = `${texto1} ${texto2}`
    return textoConcatenado
}
console.log(fxArrow('3 hola', 'Mundo!'))

const fxArrow2 = texto1 => {
    let textoConcatenado = `${texto1} Mundo!`
    return textoConcatenado
}
console.log(fxArrow2('4 hola'))

const fxArrow3 = texto1 => `${texto1} Mundo!`
console.log(fxArrow3('5 hola'))

const fxDuplicidad = numero => numero * 2;
console.log(fxDuplicidad(5))