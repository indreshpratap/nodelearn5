var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');
var mountRoutes = require('./modules');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');

require('./dao'); // for sqlite
require('./mdb'); // for mongodb
var app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: "secret", resave: false, saveUninitialized: true, cookie: { secure: false } }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
    console.log('serialize');
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
    // User.findById(id, function(err, user) {
    //   done(err, user);
    // });
});
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, function (username, password, done) {
    console.log(username, password);
    return done(null, { id: 1, name: "user 1" },null);
}));



// require('./config/passport-jwt.config')(passport);
// require('./config/passport-local.config')(passport);

//app.use("/resources",express.static(path.resolve(__dirname,'assets')));
app.use(express.static(path.resolve(__dirname, 'assets')));
// serving from node_modules specific to bulma
app.use('/resources/bulma/css', express.static(path.resolve(__dirname, '..', 'node_modules', 'bulma', 'css')));

nunjucks.configure(path.resolve(__dirname, 'views'),
    {
        express: app,  // nunjucks to express integration
        autoescape: true,
        noCache: false,
        watch: true
    }
);


app.get("/", (request, response) => {
    console.log(request.url);
    response.render("index.html", { title: "Index page" });
});

app.post('/jwt-login', (req, res, next) => {

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


app.post('/do-login',
 passport.authenticate('local'),
    (req, res) => {

        console.log(req.body,req.isAuthenticated());
        res.json(req.body);
    })
app.get("/home", (request, response) => {
    console.log(request.url);
    response.render("home.html",
        {
            username: 'Indresh',
            currentTime: new Date(),
            todoItems: [
                { label: "First todo item", completed: false },
                { label: "First todo item 2", completed: true },
                { label: "First todo item 3", completed: false },
                { label: "First todo item 4", completed: false },
            ]
            //   title:"Home page"
        });
});

//query parameter ?
app.get("/search", (request, response) => {
    console.log(request.url);
    response.send(request.query);
});

// Params
app.get("/product/:id/:name/details", (request, response) => {
    console.log(request.url);
    response.send(request.params);
})

app.get("/data", (request, response) => {
    response.json({ name: "xyz", message: "This is message" });
});

app.get("/process", (request, response) => {
    response.status(500).send('Not a valid request');
});

app.get("/process-json", (request, response) => {
    response.status(500).json({ error: 'Not a valid request' });
});

/* ------------------------- Module routes mounting ------------------------- */

mountRoutes(app);

// wildcard handler always keep at bottom
app.get("/**", (request, response) => {
    response.status(404).send("Requested url not found " + request.url);
});

app.listen(3000, () => {
    console.log("Express server is up and running at 3000");
});

