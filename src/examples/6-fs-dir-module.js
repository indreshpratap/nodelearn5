var fs = require('fs');
var path  =require('path');


fs.readdir(path.resolve(__dirname),(err,files)=>{
    if(err){
        console.log("got error ",err);
    }else {
        console.log(files);
        files.forEach(file=>{
            fs.stat(path.resolve(__dirname,file),(staterr,stats)=>{
            if(staterr){
                console.warn(staterr);
            }else {
            console.log(file, "is a ",  stats.isDirectory()?'directory':'file');
            }
            });
        })
    }
});

try {
    var result = fs.readdirSync(path.resolve(__dirname,'..','fdfdf'));
    console.log("Got result", result);
} catch (error) {
    console.warn("Catch error ::" + error);
}
console.log("End of dir reading");