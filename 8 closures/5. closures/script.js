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

var a = 10;
function outer(){
	var b = 20;
	return function inner(){
		var c = 30;
		console.log(a,b,c);
		a++;
		b++;
		c++;
	}
}

let  inner = outer(); // outer context is created
inner();	
inner();

inner = outer();  // New outer context is created
inner();
inner();

/* output

10 20 30
11 21 30
12 20 30
13 21 30

*/