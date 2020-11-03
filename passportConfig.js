const User = require("./models/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

    //pass the same instance of passport to this function
module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, next) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return next(null, false);
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