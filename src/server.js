var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');
//require('./examples/1-module');
var app = express();

//app.use("/resources",express.static(path.resolve(__dirname,'assets')));
app.use(express.static(path.resolve(__dirname,'assets')));
// serving from node_modules specific to bulma
app.use('/resources/bulma/css',express.static(path.resolve(__dirname,'..','node_modules','bulma','css')));
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
    response.render("index.html",{title:"Index page"});
});


app.get("/home", (request, response) => {
    console.log(request.url);
    response.render("home.html", 
    {
     username: 'Indresh',
     currentTime: new Date() ,
     todoItems : [
         {label:"First todo item",completed:false},
         {label:"First todo item 2",completed:true},
         {label:"First todo item 3",completed:false},
         {label:"First todo item 4",completed:false},
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


// wildcard handler always keep at bottom
app.get("/**", (request, response) => {
    response.status(404).send("Requested url not found " + request.url);
});

app.listen(3000, () => {
    console.log("Express server is up and running at 3000");
});

