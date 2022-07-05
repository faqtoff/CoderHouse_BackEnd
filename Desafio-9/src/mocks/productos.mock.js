import ContenedorMemoria from "../container/ContenedorMemoria.js";
import generarProducto from "../utils/generarProductos.js";

class ProductosMock extends ContenedorMemoria {
  constructor() {
    super();
  }

  getAll(cant = 5) {
    console.info(`ProductosMock: Generando ${cant} productos`);
    const listProd = [];

    for (let index = 0; index < cant; index++) {
      const newProd = generarProducto();
      listProd.push(newProd);
      console.log(newProd);
    }

    return listProd;
  }
}

export default ProductosMock;
