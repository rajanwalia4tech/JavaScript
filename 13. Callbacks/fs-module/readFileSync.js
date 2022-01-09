const fs = require("fs");

console.log("Before reading");

fs.readFileSync(__dirname+"/f1.txt","utf-8",function(err,data){
    if(err) console.log(err)
    console.log(data);
})

console.log("After Reading")