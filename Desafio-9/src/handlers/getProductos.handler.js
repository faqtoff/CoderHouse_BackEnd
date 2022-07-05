const getProductosHandler = (req, res, archivo) => {
  const id = Number(req.query.id);

  const findByID = (id) => {
    try {
      archivo
        .findByID(id)
        .then((rows) => {
          const list = JSON.stringify(rows);
          console.log(list);
          // res.status(200).render('partials/productos', list)
        })
        .finally(() => archivo.closeConection())
        .catch((error) => {
          throw new Error(error);
        });
    } catch (error) {
      res.status(400).send(error);
    }
  };
  const getAll = () => {
    try {
      archivo
        .list()
        .then((list) => {
          res.status(200).render("partials/productos", {
            list: list,
          });
        })
        .finally(() => archivo.closeConection());
    } catch (error) {
      res.status(400).send(error);
    }
  };

  if (id) findByID(id);
  getAll();
};

module.exports = { getProductosHandler };
