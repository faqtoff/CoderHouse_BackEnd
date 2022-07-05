// const { Messages } = require("../models/messages.model")

const newConnectionHandler = (socket) => {
  console.info("Usuario Conectado!", socket.id);

  /*  let messages = new Messages(sqLite)
    messages.createTable()
    .then(() => messages.list())
    .then(message => socket.emit('mensajes', message) )
    .finally(() => messages.closeConection() )

    
    let articulos = new Products(mariaDB)
    articulos.list()
    .then(listArticulos => socket.emit('articulos', listArticulos))
    .finally(() => articulos.closeConection() )

    socket.on('mensajeNuevo', data => {
        let messages = new Messages(sqLite)
        return messages.insert(data)
        .then(() =>  messages.list() )
        .then((message) =>  socket.emit('mensajes', message) )
        .finally(() => articulos.closeConection() )
    })

    socket.on('articuloNuevo', data => {
        let articulos = new Products(mariaDB)
        return articulos.insert(data)
        .then(() => articulos.list() )
        .then(listArticulos => socket.emit('articulos', listArticulos))
        .finally(() => articulos.closeConection() )
    }) */
};

export default newConnectionHandler;
