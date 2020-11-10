const express = require("express");
const loginRouter = express.Router();
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const Products = require('../models/products');

loginRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.post((req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
          req.logIn(user, (err) => {
            if (err) throw err;
            res.send("Successfully Authenticated");
            console.log(req.user);
          });
        }
      })(req, res, next);
    console.log(req.body)
    /* send true or false if login was sucessful */
}); //get request was async

module.exports = loginRouter;