const admin = require("firebase-admin")
const serviceAccount = require("./db/tiendacom-ar-firebase-adminsdk-jdpbt-193b51e31a.json")

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}
catch (error){
  console.error(error)
}
finally {
  console.info('Conectado a Firebase!')
}

CRUD()

async function CRUD () {
  const db = admin.firestore()
  const usuarios = db.collection('usuarios')

  /* ******************************************************************************* */
  /* Escritura de la base de datos coleccion: usuarios                               */
  /* ******************************************************************************* */
  const listaUsuarios = [
    { nombre: 'Lucas', apellido: 'Blanco', dni: '30355874' },
    { nombre: 'María', apellido: 'García', dni: '29575148' },
    { nombre: 'Tomas', apellido: 'Sierra', dni: '38654790' },
    { nombre: 'Carlos', apellido: 'Fernández', dni: '26935670' }
  ]
  for (const usuario of listaUsuarios){
    let doc = usuarios.doc();
    await doc.create(usuario);
    console.info('Documentos insertados')
  }

  /* ******************************************************************************* */
  /* Lectura de la base de datos coleccion: usuarios                                 */
  /* ******************************************************************************* */
  const snapshot = await usuarios.get()
  let docs = snapshot.docs
  const response = docs.map((doc)=>({
    id:doc.id,
    nombre: doc.data().nombre,
    dni: doc.data().dni
  }))
  console.log(response)
  
  /* ******************************************************************************* */
  /* Actualizacion de la base de datos coleccion: usuarios                           */
  /* ******************************************************************************* */
  try {
    let id = 'xCqo7qxSqA8RSL3cfAf1';
    const doc = usuarios.doc(`${id}`)
    let item = await doc.update({dni:22569878})
    console.info('El usuario ha sido actualizado', item)
  } catch (error) {
    console.error(error);
  }
  
  /* ******************************************************************************* */
  /* Delete de la base de datos coleccion: usuarios                                  */
  /* ******************************************************************************* */
  try {
    let id = 'xCqo7qxSqA8RSL3cfAf1';
    const doc = usuarios.doc(`${id}`)
    let item = await doc.delete()
    console.info('El usuario ha sido eliminado', item)
  } catch (error) {
    console.error(error);
  }
}

