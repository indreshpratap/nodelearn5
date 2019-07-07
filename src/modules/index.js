const api = require('express').Router();
const multer = require('multer');
const path = require('path');
const passport = require('../config/passport.config');
const adminRoutes = require('./admin/admin.routes');
const userRoutes = require('./user/user.routes');


const IMAGE_PATH = path.resolve(__dirname, '..','..', 'images');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, IMAGE_PATH);
    },
    filename: function (req, file, cb) {
        // giving it new file name based on date
        // cb(null, Date.now()+ path.extname(file.originalname));

        cb(null, file.originalname);
    }
});

var upload = multer({
    storage: storage
});

module.exports = function mountRoutes(app) {

    // api modules binding
    api.use("/admin", isLoggedIn, isAdmin, adminRoutes);
    api.use("/user", isLoggedIn, userRoutes);

    // api url binding to main express app
    app.use("/api", api);
}



api.post('/jwt-login', (req, res, next) => {

    passport.authenticate("local", (err, user, info) => {
        console.log("user", user, err);
        req.logIn(user, (err1) => {
            if (err1) {
                console.log(err1);
                res.status(500).json({ status: false });
            } else {
                res.json(req.user);
            }
        });

    })(req, res, next);
});


api.post('/upload-image', upload.single('file'), (req, res) => {
    res.json({...req.body,file:req.file});
});


// middleware

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(403).json({ error: 'Not authorized' });
    }
}

function isAdmin(req, res, next) {
    if (req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ error: 'Not authorized' });
    }
}