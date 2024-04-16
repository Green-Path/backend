const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String, 
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

// Create a model from the schema
const Blog = mongoose.model("Blog", UserSchema);

module.exports = Blog;
