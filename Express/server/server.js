const express = require("express"); // * this means import express
const app = express(); // * The app object conventionally denotes the Express application. Create it by calling the top-level express() function exported by the Express module.
const port = 8000; // * this is the port we are listening to

app.use(express.json()); // ! this needs to be above the other code blocks. This code block allows us to use json
app.use(express.urlencoded({extended: true}))// ! this needs to be above the other code blocks. This code block allows us to use url encoded data

// * /api - this is the route that we are listening to localhost:8000/api
// * the second argument is a callback function that will run when the route is hit
// * request is an object that contains all the information about the request that was made to the server
// * response is an object that contains all the methods for sending a response to the client
// * response.json() will send a json response to the client
// * response.json() can take in an object as an argument and it will send that object as a json response to the client

app.get("/api", (req, res) => {
    res.json({message: "Hello World"})
});

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

app.get("/api/users", (req, res) =>{
    console.log(req.body);
    console.log(res);
    res.json(users);
})

app.post("/api/users", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    // we always need to respond with something
    res.json({status: "OK"});
})

app.get("/api/users/:id", (req, res) => {
    res.json(users[req.params.id]);
})

app.put("/api/users/:id", (req, res) => {

    const id = req.params.id;
    users[id] = req.body;
    res.json(users);
})

app.delete("/api/users/:id", (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    res.json(users);
})

app.listen(port, () => console.log(`Listening on port: ${port}`))

