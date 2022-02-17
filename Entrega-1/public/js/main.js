const e = require("express")

const socket = io.connect()

const enviarMensaje = e => {
    e.prevetDefault()
    const autor = document.querySelector('#nombre').value
    const texto = document.querySelector('#mensaje').value

    socket.emit('mensajeNuevo', {autor, texto})
}

socket.on('mensajes', mensajes => {
    console.log(mensajes)

    let contMensaje = ''
    mensajes.forEach( mensaje => {
        contMensaje += `
            <span>
                <b>${mensaje.autor}</b> ${mensaje.texto}
                <br>
            </span>
        `
    });

    document.querySelector('#contenedor').innerHTML = contMensaje
})