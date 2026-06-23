import { Router } from "express";
import UserController from "./user.controller.js";


const userRouter = Router();
const userController = new UserController();


userRouter.get("/signin", userController.signin);
userRouter.get("/signup", userController.signup);
userRouter.get("/logout", userController.logout);


export default userRouter;
