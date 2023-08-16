const Joke = require("../models/joke.model");

module.exports = {
    getAllJokes: (req, res) => {
        Joke.find()
            .then(allJokes => {
                res.json(allJokes);
            })
            .catch(err => {
                res.json(err);
            })
    },

    getOneJoke: (req, res) => {
        Joke.findOne({_id: req.params.id})
            .then(oneJoke => {
                res.json(oneJoke);
            })
            .catch(err => {
                res.json(err);
            })
    },

    createJoke: (req, res) => {
        Joke.create(req.body)
            .then(newJoke => {
                res.json(newJoke);
            })
            .catch(err => {
                res.json(err);
            })
    },

    updateJoke: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedJoke => {
                res.json(updatedJoke);
            })
            .catch(err => {
                res.json(err);
            })
    },

    deleteOneJoke: (req, res) => {
        Joke.deleteOne({_id: req.params.id})
            .then(message => {
                res.json(message);
            })
            .catch(err => {
                res.json(err);
            })
    },

    getRandomJoke: (req, res) => {
        Joke.find()
            .then(allJokes => {
                res.json(allJokes[Math.floor(Math.random()*4)])
            })
            .catch(err => {
                res.json(err);
            })
    }
}