const http = require('http');
const moment = require('moment')

const getMensaje = () => {
    let hora = new Date().getHours()
    if (hora >= 6 && hora <= 12 ){
        return 'Buenos Dias!'
    } else if (hora >= 13 && hora <= 17 ){
        return 'Buenas Tardes!'
    } else if ((hora >= 20 && hora <= 23 ) || (hora >= 0 && hora <= 5)) {
        return 'Buenas Noches!'
    }
}

const server = http.createServer((req, res) => {

    if (req.url == "/") {
        let msg = { code:201, msg:"HOME" }
        res.end(JSON.stringify(msg, null, 2));
    } else if (req.url == "/saludo") {
        res.end(getMensaje());
    }


});

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor escucha en puerto ${connectedServer.address().port}`)
})