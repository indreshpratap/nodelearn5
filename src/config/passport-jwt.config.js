var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken('JWT');
opts.secretOrKey = 'nodelearn5secret';
opts.issuer = 'nodelearn5@gmail.com';
opts.audience = 'nodelearn5.com';

passport.use("jwt",new JwtStrategy(opts, function (jwt_payload, done) {

    console.log(payload,jwt_payload);
    return done(null,{id:1,name:"user"});
    // User.findOne({ id: jwt_payload.sub }, function (err, user) {
    //     if (err) {
    //         return done(err, false);
    //     }
    //     if (user) {
    //         return done(null, user);
    //     } else {
    //         return done(null, false);
    //         // or you could create a new account
    //     }
    // });
}));
