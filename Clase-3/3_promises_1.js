const dividir = (dividiendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor == 0) {
            reject('No se puede dividir por cero')
        }
        else {
            resolve(dividiendo / divisor)
        }
    })
}

dividir(10, 2)
.then(resultado =>  console.log(`Resultado: ${resultado}`))
.catch(error => console.log(`Error: ${error}`))

dividir(10, 0)
.then(resultado =>  console.log(`Resultado: ${resultado}`))
.catch(error => console.log(`Error: ${error}`))