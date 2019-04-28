var http = require('http');
var url = require('url');
var queryString = require('querystring');

var router = {
    "/": (req, res) => {
        res.write("Home page");
        res.end();
    },

    "/about": (req, res) => {
        res.write("About page");
        console.log(req.query);
        res.write(JSON.stringify(req.query));
        res.end();
    }
};

var server = http.createServer((request, response) => {
    console.log(request.url);
    let parsedUrl = url.parse(request.url);
    let routeFunc = router[parsedUrl.pathname];
    if (routeFunc) {
        if (parsedUrl.query) {
            let parsedQuery = queryString.parse(parsedUrl.query);
            console.log(parsedUrl.query, parsedQuery);
            request.query = parsedQuery;
        }
        routeFunc(request, response);
    } else {
        response.write('Not found');
        response.end();
    }
});


server.listen(3000, () => {
    console.log('Server is running at port ', 3000);
});