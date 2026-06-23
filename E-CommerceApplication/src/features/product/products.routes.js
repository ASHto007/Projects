import express from "express";
import ProductsController from "./products.controller.js";
import { uploadFile } from "../../middlewares/file-upload.middleware.js";

const productRouter = express.Router();
const productController = new ProductsController();

// All the to the controller methods
productRouter.get("/", productController.getAllProducts);
productRouter.post(
  "/",
  uploadFile.single("imgUrl"),
  productController.addProduct,
);
productRouter.get("/filter", productController.filterProduct);
productRouter.get("/:id", productController.getOneProduct);

export default productRouter;
