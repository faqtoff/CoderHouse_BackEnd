const putProductByID = async (req, res) => {
  const id = req.query.id;
  console.log(id);
  if (id) {
    try {
      const list = JSON.stringify(archivo.upload(`${id}`, req.query));
      list
        ? res.status(200).send(list)
        : res.status(404).send({ error: "Producto no encontrado" });
    } catch {
      res.status(200).send([]);
    }
  }
};

module.exports = { putProductByID };
