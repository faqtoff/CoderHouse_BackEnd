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
  const colores = db.collection('colores')

  /* ******************************************************************************* */
  /* Escritura de la base de datos coleccion: usuarios                               */
  /* ******************************************************************************* */
  /* const listaColores = [
    { nombre: 'red' },
    { nombre: 'green'},
    { nombre: 'blue'},
  ]
  for (const color of listaColores){
    let doc = colores.doc();
    await doc.create(color);
    console.info('Colores Agregados')
  } */

  /* ******************************************************************************* */
  /* Lectura de la base de datos coleccion: usuarios                                 */
  /* ******************************************************************************* */
  const snapshot = await colores.get()
  let docs = snapshot.docs
  const response = docs.map((doc)=>({
    id:doc.id,
    nombre: doc.data().nombre,
  }))
  console.log(response)
  
  /* ******************************************************************************* */
  /* Actualizacion de la base de datos coleccion: usuarios                           */
  /* ******************************************************************************* */
  try {
    let id = 'V5wIYnVaPqnVL6dkTlQ2';
    const doc = colores.doc(`${id}`)
    let item = await doc.update({nombre: 'navy'})
    console.info('El color ha sido actualizado', item)
  } catch (error) {
    console.error(error);
  }
  
  /* ******************************************************************************* */
  /* Delete de la base de datos coleccion: usuarios                                  */
  /* ******************************************************************************* */
  /* try {
    let id = 'e1fdZjESVBweF9sBJxSI';
    const doc = colores.doc(`${id}`)
    let item = await doc.delete()
    console.info('El color ha sido eliminado', item)
  } catch (error) {
    console.error(error);
  } */
}