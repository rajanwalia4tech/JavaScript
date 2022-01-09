// Serially reads the file but it creates callback
// eg: - create the video, then compress the video, the upload the video

const fs = require("fs");

console.log("Before reading ");
// fs.readFile is a Asynchronous Function and it stores in Node API and then this function readfiles which file takes less time
// in reading it then passes its corresponding callback into the event loop.
// Note :- Thats why we are getting random output in this program
fs.readFile(__dirname+"/f1.txt","utf-8" ,function(err,data){
    if(err) throw err;
    console.log("Creating the video: ",data);

    fs.readFile(__dirname+"/f2.txt","utf-8" ,function(err,data){
        if(err) throw err;
        console.log("compressing the video : ",data);

        fs.readFile(__dirname+"/f3.txt","utf-8" ,function(err,data){
            if(err) throw err;
            console.log("Uploading the video : ",data);
            console.log("Video uploaded");
        })
        console.log("Video Compressed");
    })
    console.log("Video Created");
})

console.log("After Reading ")