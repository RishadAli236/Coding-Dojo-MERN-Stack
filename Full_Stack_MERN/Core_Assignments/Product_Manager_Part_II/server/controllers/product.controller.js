const Product = require("../models/product.model");

module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => res.json(err));
    },

    getAllProducts: (req, res) => {
        Product.find()
            .then(allProducts => res.json(allProducts))
            .catch(err => res.json(err));
    },

    getOneProduct: (req, res) => {
        Product.findById(req.params.id)
            .then(product => res.json(product))
            .catch(err => res.json(err));
    }
}