export default class ProductsModel {
  constructor(id, name, desc, imgUrl, category, price, sizes) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.imgUrl = imgUrl;
    this.category = category;
    this.price = price;
    this.sizes = sizes;
  }

  static getAll() {
    return products;
  }

  static get(id) {
    const product = products.find((i) => i.id == id);
    return product;
  }

  static add(product) {
    product.id = products.length + 1;
    products.push(product);
    return product;
  }

  static filter(minPrice, maxPrice, category) {
    const filterResult = products.filter((product) => {
      return (
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice) &&
        (!category || product.category == category)
      );
    });
    return filterResult;
  }
}

const products = [
  new ProductsModel(
    1,
    "Product 1",
    "Product 1 Description",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    "Electroincs",
    2000,
  ),
  new ProductsModel(
    2,
    "Product 2",
    "Product 2 Description",
    "https://i.sstatic.net/CeCrU.jpg",
    "Cloths",
    1000,
    ["S", "M", "L"],
  ),
  new ProductsModel(
    3,
    "Product 3",
    "Product 3 Description",
    "https://images.squarespace-cdn.com/content/v1/5b35b18af93fd4d75e591f4a/1543985895500-98LX8K027J1RWKQWFGAH/HS-Website---Vegetable-Products.jpg?format=2500w",
    "Vegetables",
    1000,
    ["250gm", "500gm", "1kg"],
  ),
];
