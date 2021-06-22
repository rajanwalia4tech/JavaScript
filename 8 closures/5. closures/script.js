// Closures - Outer function's  variables, functions are also availables to inner function
// var a = 10;
// function outer(){
// 	var b = 20;
// 	console.log(a,b);
	
// 	function f1(){
// 		var i = 200;
// 		console.log(i);
// 	}
	
// 	return function inner(){
// 		var c = 30;
// 		console.log(a,b,c);
// 		f1();
// 	}
// }
// const inner = outer();
// inner();

/* output
 	10 20
	10 20 30
	200 */

// More About Closures

// var a = 10;
// function outer(){
// 	var b = 20;
// 	return function inner(){
// 		var c = 30;
// 		console.log(a,b,c);
// 		a++;
// 		b++;
// 		c++;
// 	}
// }

// const inner = outer();
// inner();
// inner();

/* output 
	10 20 30
	11 21 30
*/


// Closures in Depth 

// var a = 10;
// function outer(){
// 	var b = 20;
// 	return function inner(){
// 		var c = 30;
// 		console.log(a,b,c);
// 		a++;
// 		b++;
// 		c++;
// 	}
// }

// let  inner = outer(); // outer context is created
// inner();	
// inner();

// inner = outer();  // New outer context is created
// inner();
// inner();

/* output

10 20 30
11 21 30
12 20 30
13 21 30

*/


// Closures and var

// (function(){
// 	for (var index = 1; index <=5; index++) {
// 		setTimeout(function(){
// 			console.log(index); // output:- 6 6 6 6 6
// 		},1000);
// 	}
// })(); 


//closures and let

// (function(){
// 	for (let index = 1; index <=5; index++) {
// 		setTimeout(function(){
// 			console.log(index); // output:- 1 2 3 4 5
// 		},1000);
// 	}
// })(); 

// Let in for loops

// var arr = new Array(6);

// for(var i=1;i<=5;i++){
// 	//i++;
// 	arr[i] = function(){
// 		return 1;
// 	}
// 	console.log(arr[i]);
// 	//i--;
// }
// console.log(arr[1]());


// Arrow  functions

// let add = (a,b)=>{ return a+b; }

// console.log(add(12,23));
// let add = (a,b)=> a+b

// console.log(add(12,23));

// let hello = ()=>{
// 	console.log("hello");
// 	console.log("world");
// }
// hello();

// function Person(name){
// 	this.name = name;
// 	console.log(this);
// 	setTimeout(function (){	// here function binds with the outer object or window 
// 		console.log(this);	
// 	},1000);
// }

// new Person("aja")


// 
// function Person(name){
// 	this.name = name;
// 	console.log(this);
// 	setTimeout(()=>console.log(this),1000); // here Array function binds with the object 
// }

// new Person("aja")
(
function Person(name){
	this.name = name;
	console.log(this);

	setTimeout(function (){	// here function binds with the outer object or window 
		console.log(this);	
	},1000);
}
)();


