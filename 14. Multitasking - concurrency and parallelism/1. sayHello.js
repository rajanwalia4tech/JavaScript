/*
Concurrency means multiple computations are happening at the same time. Concurrency is everywhere in modern programming, whether we like it or not: Multiple computers in a network. Multiple applications running on one computer. Multiple processors in a computer (today, often multiple processor cores on a single chip — MIT
*/
function sayHello(name, timer){
    let count=0;
    let loopId = setInterval(function(){
        count++;
        console.log("Hello ", name);
        if(count == timer){
            clearInterval(loopId)
        }
        //while(true){} // It will block the js thread. Since JS is a single threaded language so nothing works after this
    },500);
}

sayHello("Rajan ", 3)
sayHello("Mukul",3);
sayHello("sahu",3);
