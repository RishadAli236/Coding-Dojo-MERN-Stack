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
    },

    updateProduct: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.json(err));
    },

    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
    }
}