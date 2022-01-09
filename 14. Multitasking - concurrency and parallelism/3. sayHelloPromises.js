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
// sayHello("Rajan",3)
// sayHello("Mukul",3)
// sayHello("Sahu",3);

//sequencially
// sayHello("Rajan",3)
// .then(()=>{
//     sayHello("Mukul",3)
//     .then(()=>{
//         sayHello("Sahu",3);
//     })
// })

// concurrency
// sayHello("Rajan",3)
// .then(sayHello("Mukul",3))
// .then(sayHello("Sahu",3))

// concurrency
// sayHello("Rajan",3)
// .then(sayHello("Mukul",3).then(sayHello("Sahu",3)))

// Sequentially
// sayHello("Rajan",3)
// .then(function (){ return sayHello("Mukul",3)})
// .then(function (){sayHello("Sahu",3)});

// sayHello("Rajan",3)
// .then(()=>sayHello("Mukul",3))
// .then(()=>sayHello("Sahu",3));