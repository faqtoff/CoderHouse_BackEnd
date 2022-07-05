const deleteProductByID = async (req, res) => {
  const id = req.query.id;
  console.log(id);
  if (id) {
    try {
      const list = JSON.stringify(archivo.delete(`${id}`));
      list
        ? res.status(200).send({ msg: "Producto eliminado" })
        : res.status(404).send({ error: "Producto no encontrado" });
    } catch {
      res.status(500);
    }
  } else {
    res.status(404).send({ error: "Producto no encontrado" });
  }
};

module.exports = { deleteProductByID };
