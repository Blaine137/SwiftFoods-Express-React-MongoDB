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
    },
    home: {
        title1:{
            type: String,
            unique: true
        },
        title2:{
            type: String,
            unique: true
        },
        title3:{
            type: String,
            unique: true
        },
        title4:{
            type: String,
            unique: true
        }
    },
    about: {
        title1: {
            type: String,
            unique: true
        },
        p1: {
            type: String,
            unique: true
        },
        title2: {
            type: String,
            unique: true
        },
        p2: {
            type: String,
            unique: true
        },
        title3: {
            type: String,
            unique: true
        },
        p3: {
            type: String,
            unique: true
        }

    }
    
})

module.exports = mongoose.model('Products', productSchema)