


//   passport.serializeUser(function(user, done) {
//     done(null, user);
//   });
  
//   passport.deserializeUser(function(user, done) {
//       done(null,user);
//     // User.findById(id, function(err, user) {
//     //   done(err, user);
//     // });
//   });

module.exports = (passport)=>{
    console.log('passport local');
    passport.use(new LocalStrategy(
        function(username, password, done) {
            console.log(username,password);
            return done(null,{id:1,name:"user 1"});
          // User.findOne({ username: username }, function (err, user) {
          //   if (err) { return done(err); }
          //   if (!user) {
          //     return done(null, false, { message: 'Incorrect username.' });
          //   }
          //   if (!user.validPassword(password)) {
          //     return done(null, false, { message: 'Incorrect password.' });
          //   }
          //   return done(null, user);
          // });
        }
      ));
}
