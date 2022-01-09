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

// Execute a sequencial of concurrent tasks
async function task(){
    console.log("---- Rajan, Mukul and Sahu started working ----")
    await Promise.all([  // these three tasks will execute concurrently
    sayHello("Rajan",3),
    sayHello("Mukul",3),  
    sayHello("Sahu",3)
    ]);

    console.log("---- Nitin, Aman, Techie  started working ---")
    await Promise.all([  // these three tasks will execute concurrently
        sayHello("Nitin",3),
        sayHello("Aman",3),
        sayHello("Techie",3)
    ]);
        
}

task();
