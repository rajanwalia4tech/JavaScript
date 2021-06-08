//var a=10 --  function scope
// let a=10  --  block scope
//  a= 10 -- global scope
// let a = 10;


// function c(){
// 	const b= 20;
// 	{
		
// 		let b = 23;
// 		console.log(b)
// 	}
// 	console.log(a)
// }
// //console.log(b)
// c()

// console.log(b); // undefined bcoz b declared not defined
// var b= 10;
l = 10;

console.log(l)

a();
//b() // can't access here 
//console.log(a)
console.log(c)
c = 333;
function a(){
    if(1){
		d= 20;	//
    }
}


b = function(){
	c=30;
	console.log("hello ",c);
}
console.log(c)
//a()
//console.log(typeof a)
b() //

console.log(c)