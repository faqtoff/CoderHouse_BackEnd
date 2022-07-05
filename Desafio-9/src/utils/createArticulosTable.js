let test = [
    {
        title:"Globo Terráqueo",
        price:345.67,
        thumbnail:"https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
    },
    {
        title:"Escuadra",
        price:123.45,
        thumbnail:"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
    }
]

const createArticulosTable = (data) => {
    /* DB articulos */
    let articulos = new Products(mariaDB)
    articulos.createTable()
    .then(() => {
        return articulos.insert(data ||  test)
    })
    .finally(() => articulos.closeConection() )
}

module.exports =  { createArticulosTable } 