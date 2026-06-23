import ProductsModel from "./products.model.js";

export default class ProductsController {
  // List All products
  getAllProducts(req, res) {
    const products = ProductsModel.getAll();
    res.status(200).send(products);
  }

  // Add One Product
  addProduct(req, res) {
    const { name, price, sizes } = req.body;

    // Safely handle 'sizes' regardless of incoming type
    let formattedSizes = [];
    if (Array.isArray(sizes)) {
      formattedSizes = sizes; // Already an array, use as-is
    } else if (typeof sizes === "string") {
      formattedSizes = sizes.split(",").map((s) => s.trim()); // Split string and clean up spaces
    }
    const finalImgUrl = req.file
      ? "images/" + req.file.filename
      : existingProduct.imgUrl;

    const newProduct = {
      name,
      price: parseFloat(price),
      sizes: formattedSizes,
      imgUrl: finalImgUrl,
    };
    const createdRecord = ProductsModel.add(newProduct);
    res.status(201).send(createdRecord);
  }
  // Get perticular product
  getOneProduct(req, res) {
    const id = req.params.id;
    console.log(id);
    const productResult = ProductsModel.get(id);
    if (!productResult) {
      res.status(404).send("Product not found");
    }
    res.status(200).send(productResult);
  }
  // rate perticular product
  filterProduct(req, res) {
    const { minPrice, maxPrice, category } = req.query;
    // const minPrice = req.query.minPrice;
    // const maxPrice = req.query.maxPrice;
    // const category = req.query.category;
    const filterResult = ProductsModel.filter(minPrice, maxPrice, category);
    console.log(filterResult);
    return res.status(200).send(filterResult);
  }
}
