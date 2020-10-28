const express = require("express");
const shopRouter = express.Router();
const Products = require('../models/products');

shopRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get(async (req, res) => {
    try {
        const products = await Products.find();
        
        res.send({data: products[0]}); //returns json
    } catch(err){
        res.json(err);
    }
});

module.exports = shopRouter;