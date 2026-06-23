import express from "express";
import productRouter from "./src/features/product/products.routes.js";
import bodyParser from "body-parser";
import userRouter from "./src/features/user/user.routes.js";
import basicAuthorization from "./src/middlewares/basicAuth.middleware.js";
import jwtAuth from "./src/middlewares/jwtAuth.middleware.js";

const port = 3000;
// Create a server
const server = express();

server.use(bodyParser.json());

// Default server Handler
server.get("/", (req, res) => {
  res.send("Welcome to E-Comm API Server");
});

// Product Routes
server.use("/api/products/", jwtAuth, productRouter);
// User Routes
server.use("/api/users", userRouter);

//  Specify port
server.listen(port, () => {
  console.log(`Server is running on port: ${port} `);
  console.log(`Server URL: http://localhost:3000/`);
});
