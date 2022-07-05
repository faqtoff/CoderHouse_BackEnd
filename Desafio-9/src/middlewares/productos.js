const productosMid = (req, resn, next) => {
  console.info(`Se ejecuta el Midd de Productos, Time: ${Date.now()}`);
  next();
};

export default productosMid;
