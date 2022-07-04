import Express from "express";
import { faker } from '@faker-js/faker';

const app = Express();

const generarRandomObjeto = () => {
    return {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        color: faker.vehicle.color(),
    }
}

app.get('/test', (req, res) => {
    const objects = []
    const cant = Number(req.query.cant) || 10

    for (let index = 0; index < cant; index ++ ) {
        objects.push({id: index + 1, ...generarRandomObjeto()})
    }
    res.status(200).json({
        data: objects
    })
})


/* SERVER */
const PORT = 8080;
const server = app.listen(PORT, () => console.info(`Mock Server listening in port ${server.address().port}`))
server.on("error", error => console.error(`Error en servidor ${error}`))