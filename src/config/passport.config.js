
var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(function (username, password, done) {
        console.log(username, password);
        return done(null, { id: 1, name: "user 1" });
    }));

    



module.exports = passport;