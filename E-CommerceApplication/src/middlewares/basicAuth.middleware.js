import UserModel from "../features/user/user.model.js";

const basicAuthorization = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).send("No authorization header details found");
  }
  console.log(authHeader);
  //    Encode credentials
  const base64Cred = authHeader.replace("Basic ", "");
  console.log(base64Cred);

  //   Decode Credentials
  const decodeCreds = Buffer.from(base64Cred, "base64").toString("utf-8");
  console.log(decodeCreds);
  const creds = decodeCreds.split(":");

  const user = UserModel.getAll().find(
    (u) => u.email == creds[0] && u.password == creds[1],
  );
  if (user) {
    next();
  } else {
    return res.status(400).send("Unauthorized User");
  }
};

export default basicAuthorization;
