const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    pizza: {
        title: {
            type: String,
            unique: true
        },
        description: {
            type: String,
            unique: true
        },
        price: {
            type: mongoose.Types.Decimal128,
            unique: true
        }
    },
    salad: {
        title: {
            type: String,
            unique: true
        },
        description: {
            type: String,
            unique: true
        },
        price: {
            type: mongoose.Types.Decimal128,
            unique: true
        }
    },
    burger: {
        title: {
            type: String,
            unique: true
        },
        description: {
            type: String,
            unique: true
        },
        price: {
            type: mongoose.Types.Decimal128,
            unique: true
        }
    }
})

module.exports = mongoose.model('Products', productSchema)