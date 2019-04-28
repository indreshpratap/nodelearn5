var os = require('os');


console.log(os.arch());
console.log(os.cpus());

console.log("Free memory",os.freemem());
console.log("Platform",os.platform());


console.log("Dir name",__dirname);
console.log("File name", __filename);