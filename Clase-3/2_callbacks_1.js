const operacion = (numero1, numero2, operar) => operar(numero1, numero2)

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

console.log(operacion(1, 2, suma))
console.log(operacion(1, 2, resta))
console.log(operacion(1, 2, multiplicacion))
console.log(operacion(1, 2, division))