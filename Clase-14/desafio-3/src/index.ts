import express  from "express";

import { Perimetro } from "./lib/perimetro";
import { Superficie } from "./lib/superficie";

const objPerimetro = new Perimetro()
const objSuperficie = new Superficie()

const app = express();

app.get('/', (req, res) => {
    res.send('Aplicacion con TS y Webpack')
})
app.get('/perimetro/:figura/:param1/:param2', (req, res) => {
    let {figura, param1, param2} = req.params;
    let resultado = 0

    switch (figura){
        case 'cuadrado':
            resultado = objPerimetro.cuadrado(Number(param1))
            break;
        case 'rectangulo':
            resultado = objPerimetro.rectangulo(Number(param1), Number(param2))
            break;
        case 'circulo':
            resultado = objPerimetro.circulo(Number(param1))
            break;
    }

    res.status(200).json({
        calculo: 'perimetro',
        figura,
        param1,
        param2,
        resultado
    })
})

app.get('*', (req, res) => {
    res.status(404).json({codigo: 404, message: 'No encontrado'})
})
/* SERVER ------------------------ */
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server lisen in port: ${PORT}`);
});