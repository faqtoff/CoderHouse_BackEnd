const socket = io.connect()

const formMensaje = document.querySelector('#formMensaje')
formMensaje.addEventListener('submit', e => {
    e.preventDefault()
    const autor = document.querySelector('#nombre')
    const texto = document.querySelector('#mensaje')

    socket.emit('mensajeNuevo', {autor: autor.value, texto: texto.value})
    autor.value = ''
    texto.value = ''
})
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