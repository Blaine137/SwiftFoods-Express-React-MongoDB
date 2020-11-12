const User = require("./models/User");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

    //pass the same instance of passport to this function
module.exports = function (passport) {
    //in order to use localStrategy, it must be inside passport.use()
  passport.use(
      //localStrategy is used to verify username and password
    new localStrategy((username, password, next) => {
        //try and find the username in the database
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        console.log('this is working')
        if (!user) return next(null, false);
          //decrypts the password from database and compares to the one entered
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return next(null, user);
          } else {
            return next(null, false);
          }
        });
      });
    })
  );

    //stores a cookie inside of the browser
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

    //unwraps the cookie and gets the user
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
      };
      cb(err, userInformation);
    });
  });
};