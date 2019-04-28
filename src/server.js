var express = require('express');
//require('./examples/1-module');
var app = express();


app.get("/", (request, response) => {
    console.log(request.url);
    response.send("Test express");
});


app.get("/home", (request, response) => {
    console.log(request.url);
    response.send("Home page");
});

//query parameter ?
app.get("/search", (request, response) => {
    console.log(request.url);
    response.send(request.query);
});

// Params
app.get("/product/:id/:name/details",(request,response)=>{
    console.log(request.url);
    response.send(request.params);
})

app.get("/data", (request, response) => {
    response.json({ name: "xyz", message: "This is message" });
});

app.get("/process",(request,response)=>{
    response.status(500).send('Not a valid request');
});

app.get("/process-json",(request,response)=>{
    response.status(500).json({error:'Not a valid request'});
});


// wildcard handler always keep at bottom
app.get("/**",(request,response)=>{
    response.status(404).send("Requested url not found "+ request.url);
});

app.listen(3000, () => {
    console.log("Express server is up and running at 3000");
});

