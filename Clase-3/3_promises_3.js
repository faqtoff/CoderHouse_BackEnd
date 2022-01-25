new Promise ((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})
    .then((result) => {
        console.log(`then 1 - Se recibe: ${result}`)
        let nuevoValor = result *2;
        console.log(`then 1 - Se envia: ${nuevoValor}`)
        return nuevoValor
    })
    .then((result) => {
        return Promise.reject('Se enconto un error')
    })
    .then((result) => {
        console.log(`then 2 - Se recibe: ${result}`)
        let nuevoValor = result + 10;
        console.log(`then 2 - Se envia: ${nuevoValor}`)
        return nuevoValor
    })
    .catch( error => console.log(`Catch: Se recibe: ${error}`))