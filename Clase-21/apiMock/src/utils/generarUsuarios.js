
import { faker } from '@faker-js/faker';

const generarUsuario = () => {
    return {
        photoURL: faker.image.avatar(),
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber('(+54) 9 011 15 ### ####')
    }
}

export default generarUsuario