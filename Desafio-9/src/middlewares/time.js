const timeMid = (req, resn, next) => {
  console.info(`Se ejecuta el Midd de app, Time: ${Date.now()}`);
  next();
};

export default timeMid;
