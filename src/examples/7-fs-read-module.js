const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, '1-module.js');
/**
 * Async file reading
 */
fs.readFile(filePath,{encoding:'utf8'},
    (err, data) => {
        if(err){
            console.warn("Error in file reading",err);
        }else {
            console.log(data);
}});

console.log("------------reading file in sync ------------");

let fileContent = fs.readFileSync(filePath,'utf8');
console.log((fileContent));

