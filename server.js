const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001; //heroku: 8080  localhost: 3001

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const mongoose = require('mongoose');

const getData = require('./routes/getData');
const loginRouter = require('./routes/loginRouter');
const registerRouter = require('./routes/registerRouter');
const paymentRouter = require("./routes/paymentRouter");

require('dotenv/config');


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

/* CONNECT TO DB */
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, () => {
    console.log('connected to db')
})

/* MIDDLEWARE */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
      origin: "http://localhost:3000/", // <-- location of the react app were connecting to -- was http://localhost:3000 for local testing  heroku: https://swiftfoods.herokuapp.com/
      credentials: true,
    })
  );
app.use(
    session({
      secret: "secretcode",
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(cookieParser("secretcode"));
  app.use(passport.initialize());
  app.use(passport.session());
  require("./passportConfig")(passport);


/* ROUTES */
app.use('/getData', getData)
app.use('/login', loginRouter)
app.get('/logout', async(req, res) => {
  
  if(req.session){
    req.logout(); //destroys passport
    res.send('User logged out!')
    req.session.destroy(() => {
      console.log('session destroyed')
    });
  
    res.clearCookie('secretcode')
    
  }
}) //logout route
app.use('/guest', loginRouter)
app.use('/register', registerRouter)
app.use('/payment', paymentRouter)


app.get('/*', (req, res) => {
  res.redirect('/');
}) //redirect route for heroku



app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});