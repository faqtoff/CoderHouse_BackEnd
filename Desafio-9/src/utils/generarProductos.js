import { faker } from "@faker-js/faker";

const generarProducto = () => {
  faker.locale = "es";
  return {
    photoURL: faker.image.avatar(),
    nombre: faker.commerce.product(),
    price: faker.finance.amount(),
  };
};

export default generarProducto;
