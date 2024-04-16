const mongoose = require('mongoose');

const applianceSchema = new Schema({
    name : String,
    price : Number,
    powerRating : Number,
    imgURL : String
});