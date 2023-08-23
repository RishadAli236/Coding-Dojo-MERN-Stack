const Author = require("../models/author.model");

module.exports = {
    addAuthor: (req, res) => {
        Author.create(req.body)
            .then(newAuthor => res.json(newAuthor))
            .catch(err => res.status(400).json(err));
    },

    getAllAuthors: (req, res) => {
        Author.find().sort({type: "asc"})
            .then(allAuthors => res.json(allAuthors))
            .catch(err => res.json(err));
    },

    getOneAuthor: (req, res) => {
        Author.findById(req.params.id)
            .then(author => res.json(author))
            .catch(err => res.json(err));
    },

    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => res.status(400).json(err));
    },

    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then(deleteConfrimation => res.json(deleteConfrimation))
            .catch(err => res.json(err));
    }
}