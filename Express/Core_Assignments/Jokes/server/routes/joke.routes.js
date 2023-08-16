const JokeController = require("../controllers/joke.controller");

module.exports = app => {
    app.get("/api/jokes", JokeController.getAllJokes);
    app.get("/api/jokes/:id", JokeController.getOneJoke);
    app.post("/api/jokes", JokeController.createJoke);
    app.put("/api/jokes/:id", JokeController.updateJoke);
    app.delete("/api/jokes/:id", JokeController.deleteOneJoke);
    app.get("/api/randomJoke", JokeController.getRandomJoke);
}