const errorMid = (err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something broke!").json({ error: err });
};

export default errorMid;
