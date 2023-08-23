const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Author name is required"],
        minlength: [3, "Author name should have at least 3 characters"]
    }
}, {timestamps: true});

const Author = mongoose.model("Pet", AuthorSchema);
module.exports = Author;