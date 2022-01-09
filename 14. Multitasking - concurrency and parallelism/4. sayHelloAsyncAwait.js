function sayHello(name, timer){
    return new Promise((resolve,reject)=>{
        let count=0;
        let loopId = setInterval(function(){
            count++;
            console.log("Hello ", name);
            if(count == timer){
                clearInterval(loopId)
                resolve();
            }
            //while(true){} // It will block the js thread. Since JS is a single threaded language so nothing works after this
        },500);
    })
}

// concurrency
async function task(){
    sayHello("Rajan",3);
    sayHello("Mukul",3);
    sayHello("Sahu",3);
}

// sequencially

async function task(){
    await sayHello("Rajan",3);
    await sayHello("Mukul",3);
    await sayHello("Sahu",3);
}

task();
// sayHello("Pranjal",3) // execute sequencially