const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    description: String,
    price: mongoose.Types.Decimal128
})

module.exports = mongoose.model('Products', ProductSchema)