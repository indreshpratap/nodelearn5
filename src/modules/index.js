const api = require('express').Router();
const passport = require('../config/passport.config');
const adminRoutes = require('./admin/admin.routes');
const userRoutes = require('./user/user.routes');

module.exports = function mountRoutes(app) {

    // api modules binding
    api.use("/admin", adminRoutes);
    api.use("/user", userRoutes);

    // api url binding to main express app
    app.use("/api", api);
}


api.post('/jwt-login', (req, res,next) => {

    passport.authenticate("local",(err,user,info)=>{
        console.log("user",user,err);
    req.logIn(user,(err1)=>{
        if(err1){
            console.log(err1);
            res.status(500).json({status:false});
        }else {
            res.json(req.user);
        }
    });

    })(req,res,next);
});