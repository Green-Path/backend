const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    powerRating: {
        type: Number,
        required: true
    },
    link: {
        type: String, 
        required: true
    },
    type: {
        type: String, 
        required: true
    }
});

// Create a model from the schema
const appliance = mongoose.model("appliance", ProductSchema);

module.exports = appliance;
