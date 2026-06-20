import express from "express";
const port = 3000;
const server = express();

server.get("/", (req, res) => {
  res.send("Welcome to E-Comm API Server");
});

server.listen(port, () => {
  console.log(`Server is running on port: ${port} `);
  console.log(`Server URL: http://localhost:3000/`);
});
