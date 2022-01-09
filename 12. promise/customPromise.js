console.log("Before ")
const download = function download(){
    return new Promise((resolve,reject)=>{
        if(1==1)
            resolve("Hello there","How are you?");
        else
            reject("Go away");
        
    })    
}
console.log(download().then((r1,r2)=>{
    console.log(r1);
    console.log(r2)
}))

console.log("After")