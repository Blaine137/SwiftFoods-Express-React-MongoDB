const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Products = require('./models/products');
require('dotenv/config');


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// app.use(express.static("client/build"));
app.use(bodyParser.json());

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, () => {
    console.log('connected to db')
})

const shopRouter = express.Router();

shopRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get(async (req, res) => {
    try {
        const products = await Products.find();
        res.json(products);
    } catch(err){
        res.json(err);
    }
});

app.use('/shop', shopRouter)

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});