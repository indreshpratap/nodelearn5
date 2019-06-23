var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    category: String,
    active: Boolean,
    price: Number,
    discountPrice: Number,
    rating: Number,
    description: String,
    brand: String,
    quantity: Number,
    specification: [{ label: String, value: String }]


})

module.exports = mongoose.model("product", productSchema);