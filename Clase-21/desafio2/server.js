import { Express } from "express";
import { faker } from "express";

const app = Express();

const generarRandomObjeto = () => {
    return {
        nombre: faker.name.findName(),
        apellido: faker.name.lastName(),
        color: faker.name.color(),
    }
}

app.get('/test', (req, res) => {
    const obj = []
    const cant = Number(req.query.cant) || 10

    for (let index = 0; index < cant; index ++ ) {

    }
})


/* SERVER */
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.error(`Error en servidor ${error}`))