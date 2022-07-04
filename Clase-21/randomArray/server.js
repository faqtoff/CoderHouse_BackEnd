import Express from "express";

const app = Express()
const PORT  = 8080

/* ------------------ MOCKUP DATA ------------------ */
const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

/* ------------------ FUNCTIONS ------------------ */
const generarRandomItemArray = (listaDatos) => listaDatos[Math.floor(listaDatos.length * Math.random())]
const generarRandomObjeto = () => ({
    nombre: generarRandomItemArray(nombres),
    apellido: generarRandomItemArray(apellidos),
    color: generarRandomItemArray(colores),
})

app.get('/test', ( req, res ) => {
    let objects = []
    for (let index = 0; index <= 10; index++){
        const element = generarRandomObjeto()
        objects.push(element)
    }
    res.status(200).json({
        data: objects
    })
})

const server = app.listen( PORT, () => console.info(`Mock Server listening in port ${PORT}`) )
