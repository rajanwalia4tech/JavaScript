function greet(name,callback){
    let msg = "Hello " + name;
    callback(msg);
}

function show(msg){
    console.log(msg);
}

greet("Rajan",show);