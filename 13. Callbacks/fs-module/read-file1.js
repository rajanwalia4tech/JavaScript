// Parallely reads the file

const fs = require("fs");

console.log("Before reading ");
// fs.readFile is a Asynchronous Function and it stores in Node API and then this function readfiles which file takes less time
// in reading it then passes its corresponding callback into the event loop.
// Note :- Thats why we are getting random output in this program
fs.readFile(__dirname+"/f1.txt","utf-8" ,function(err,data){
    if(err) throw err;
    console.log("content : ",data);
})

fs.readFile(__dirname+"/f2.txt","utf-8" ,function(err,data){
    if(err) throw err;
    console.log("content : ",data);
})

fs.readFile(__dirname+"/f3.txt","utf-8" ,function(err,data){
    if(err) throw err;
    console.log("content : ",data);
})

// fs.readFile(__dirname+"/f1.txt","utf-8" ,function(err,data){
//     if(err) throw err;
//     console.log("content : ",data);
// })

// fs.readFile(__dirname+"/f2.txt","utf-8" ,function(err,data){
//     if(err) throw err;
//     console.log("content : ",data);
// })

// fs.readFile(__dirname+"/f3.txt","utf-8" ,function(err,data){
//     if(err) throw err;
//     console.log("content : ",data);
// })

console.log("After Reading ")