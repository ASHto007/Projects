import jwt from "jsonwebtoken";
const jwtAuth = (req, res, next) => {
  console.log(req.headers);
  const jwtToken = req.headers["authorization"];

  if (!jwtToken) {
    return res.status(401).send("Unauthorized");
  }
  try {
    jwt.verify(jwtToken, "Tny8Btj49BgmKuWQmBQ5QPz9G2CaEd0DqVcyrb9m2gg=");
  } catch (err) {
    return res.status(401).send("Unauthorized");
  }
  next();
};
export default jwtAuth;
