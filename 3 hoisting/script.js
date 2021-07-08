//var a=10 --  function scope
// let a=10  --  block scope
//  a= 10 -- global scope
// let const f = 20; // block scope and value can't be changed
// let a = 10;


// function c(){
// 	const b= 20;
// 	{
		
// 		let b = 23;
// 		const f =10;
// 		console.log(f)
// 		console.log(b)
// 	}
// 	console.log(a)
// 	//console.log(f)
// }
// c();


// console.log(b); // undefined bcoz b declared not defined
// var b= 10;
// l = 10;

// console.log(l)
// var b = 20;  // is same as b=20
// console.log(b);

// let f=20;
// console.log(f);
// let f = 20; // SyntaxError: Identifier 'f' has already been declared


a();
console.log(typeof a);	// function
//b() // can't access here 
//console.log(a)
//console.log(c) // ReferenceError: c is not defined
c = 333;
function a(){  // will be hoisted
    if(1){
		d= 20;	//
    }
}


b = function(){
	c=30;
	console.log("hello ",c); // 30
}
// console.log(c)	// 333
a()
// console.log(typeof a);	// function
// console.log(typeof b);	// function
b();

console.log(c)	//30