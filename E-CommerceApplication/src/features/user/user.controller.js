import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

export default class UserController {
  signup(req, res) {
    const { name, email, password, type } = req.body;

    // try {
    const result = UserModel.signUp(name, email, password, type);
    res.status(201).send(result);
    // } catch (err) {}
  }
  signin(req, res) {
    console.log(req.body.email);
    const userResult = UserModel.signIn(req.body.email, req.body.password);

    if (!userResult) {
      return res.status(400).send("Incorrect Credentials");
    } else {
      const token = jwt.sign(
        {
          userId: userResult.id,
          userEmail: userResult.email,
        },
        "Tny8Btj49BgmKuWQmBQ5QPz9G2CaEd0DqVcyrb9m2gg=",
        {
          expiresIn: "1h",
        },
      );
      console.log("token", token);
      return res.status(200).send(token);
    }
  }
  logout(req, res) {}
}
