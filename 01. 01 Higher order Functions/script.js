console.log("Higher Order Functions - A function which takes another function as an arguement or returns a function from it ");
function x(){
    console.log("HEllo");
}

function y(callback){ // Here y is HOF and x is a callback
    callback();
}

// y(x);

const radius = [3,4,5,2];
const area = (r)=>{
    return Math.PI*r*r;
}
const circumference = (r)=>{
    return 2* Math.PI * r;
}
const diameter = (r)=>{
    return 2*r;
}

const calculate = function(radius,logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}
// console.log(radius)
// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));
// console.log(radius.map(area));

// functional programmming says that think everything in functions
//  and reuse those functions

// this is pollyfill of map
Array.prototype.calculate = function(logic){
    const output = [];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}
// Map is a HOF in JS
console.log(radius.map(area));
console.log(radius.calculate(area));
