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
