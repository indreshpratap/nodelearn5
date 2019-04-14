var path = require('path');

console.log("dirname ::", __dirname);

console.log(path.resolve(__dirname,'src'));
console.log(path.resolve(__dirname,'..','..','public'));

console.log(
    path.extname(__filename)
);

console.log(path.normalize(__dirname,"..."));

console.log(path.parse(__dirname));