const express = require("express");
const logoutRouter = express.Router();
const passport = require("passport");


logoutRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
   req.logout();
   res.send('User has logged out')
}); //get request was async

module.exports = logoutRouter;