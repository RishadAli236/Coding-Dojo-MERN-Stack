const ProductController = require("../controllers/product.controller");
const Product = require("../models/product.model");

module.exports = app => {
    app.post("/api/newProduct", ProductController.createProduct);
    app.get("/api/allProducts", ProductController.getAllProducts);
    app.get("/api/allProducts/:id", ProductController.getOneProduct);
    app.put("/api/allproducts/:id", ProductController.updateProduct);
    app.delete("/api/allproducts/:id", ProductController.deleteProduct);
}