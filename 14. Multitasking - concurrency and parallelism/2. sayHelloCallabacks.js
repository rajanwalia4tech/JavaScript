// Execute every task sequentially using callbacks
// But this create callback hell

function sayHello(name, timer,doAnotherTask){
    let count=0;
    let loopId = setInterval(function(){
        count++;
        console.log("Hello ", name);
        if(count == timer){
            clearInterval(loopId)
            doAnotherTask();

        }

    },500);
}

sayHello("Rajan ", 3,()=>{
    sayHello("Mukul",3,()=>{
        sayHello("Sahu",3,()=>{

        })
    })
})