const express = require("express");
const registerRouter = express.Router();
const User = require('../models/User');

registerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.post((req, res) => {
    // try {
    //     const products = await Products.find();
    //     res.send({data: products[0]}); //returns json
    // } catch(err){
    //     res.json(err);
    // }
    console.log(req.body)
    /* send true or false if register was sucessful */
    User.findOne({username: req.body.username}, async (err, doc) => {
        if(err){
            throw err;
        }
        if(doc){
            res.send('user already exists')
        }
        if(!doc){
            const newUser = new User({
                username: req.body.username,
                password: req.body.password
            })
            await newUser.save();
            res.send('user created')
            console.log('users created')
        } /* STOPS AT 20:51 ON VIDEO */
    })

}); //post request was async

module.exports = registerRouter;