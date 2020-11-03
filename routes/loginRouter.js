const express = require("express");
const loginRouter = express.Router();
const Products = require('../models/products');

loginRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    // try {
    //     const products = await Products.find();
    //     res.send({data: products[0]}); //returns json
    // } catch(err){
    //     res.json(err);
    // }
    console.log(req.body)
    /* send true or false if login was sucessful */
}); //get request was async

module.exports = loginRouter;