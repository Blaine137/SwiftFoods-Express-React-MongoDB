const express = require("express");
const registerRouter = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

registerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
})
.post((req, res) => {
    User.findOne({username: req.body.username}, async (err, doc) => {
        if(err){
            throw err;
        }
        if(doc){
            res.send('user already exists')
        }
        if(!doc){
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
            res.send('user created')
            console.log('users created')
        } 
    })

}); //post request was async

module.exports = registerRouter;