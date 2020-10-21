const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
require('dotenv/config');


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// app.use(express.static("client/build"));


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
.get((req, res) => {
    console.log('communicating')
});

app.use('/shop', shopRouter)

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});