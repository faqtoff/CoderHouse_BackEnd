const socket = io.connect()

socket.on('articulos', articulos => {
    let contArticulos = ''
    articulos.forEach( articulo => {
        contArticulos += `
            <div class='card grid--3'>
                <h2>${articulo.title}</h2>
                <p>$${articulo.price}</p>
                <img src='${articulo.thumbnail}' alt='imagen_articulo' />
            </div>
        `
    });
    document.querySelector('#contenedor').innerHTML = contArticulos
})

socket.on('mensajes', mensajes => {
    console.log(mensajes)
    let contMensajes = ''
    mensajes.forEach( mensaje => {
        contMensajes += `
            <fieldset class='form__fieldset grid--3'>
                <h2>${mensaje.email}</h2>
                <p>${mensaje.fecha}</p>
                <p>${mensaje.mensaje}</p>
            </fieldset>
        `
    });
    document.querySelector('#mensajes').innerHTML = contMensajes
})
const formArticulo = document.querySelector('#formArticulo')
formArticulo.addEventListener('submit', e => {
    e.preventDefault()
    const title = document.querySelector('#title')
    const price = document.querySelector('#price')
    const thumbnail = document.querySelector('#thumbnail')

    socket.emit('articuloNuevo', {title: title.value, price: price.value, thumbnail: thumbnail.value})
    thumbnail.value = ''
    price.value = ''
    title.value = ''
})

const formMensaje = document.querySelector('#formMensaje')
formMensaje.addEventListener('submit', e => {
    e.preventDefault()
    const email = document.querySelector('#email')
    const mensaje = document.querySelector('#mensaje')
    const fecha = new Date() 

    socket.emit('mensajeNuevo', {email: email.value, mensaje: mensaje.value, fecha: fecha.toDateString()})
    email.value = ''
    mensaje.value = ''
})