const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, 'written.txt');

fs.writeFile(filePath,'\nthis is the data that need to be written with utf8',
{encoding:'utf8',flag:'a'},
(err)=>{
    if(err){
        console.log("Failed to write content to file again",err);
    }else {
        console.log("content written");
    } 
})