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
    type: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    link: {
        type: String, 
        required: true
    }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
