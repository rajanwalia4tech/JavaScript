// f()
// function f(){
// 	console.log("hello")
// }
// f()

// Named functions / function expression can't called before defined
// f() // REferenceError: f is not defined
// f = function func2(){
// 	console.log("f2");
// }
// f()
//func2()  // REferenceError: func2 is not defined

//f()// REferenceError: f is not defined
// f = function (){
// 	console.log("hello ");
// }
// f()

//parameters in functions
// function add(a, b, c) {
//   console.log(a, b, c);

//   return a + b + c;
// }
// console.log(add(1, 2));		// 1 2 undefined      NaN
// console.log(add(1));		// 1 undefined undefined NaN	
// console.log(add(1, 2, 3));  // 1 2 3	6

//Arguments in Functions
// function printAll() {
//   for (var i = 0; i < arguments.length; ++i) {
//     console.log(arguments[i]);
//   }
// }
// printAll("mango", "apple"); // Prints - mango apple

// printAll('fire', 'water', 'ice', 'gas'); // Prints - fire water ice gas

// function printAll(a,b) {
// 	console.log(arguments.length)
// 	console.log(a,b,arguments[0],arguments[1]);
//   for (var i = 0; i < arguments.length; ++i) {
//     console.log(arguments[i]);
//   }
// }
// printAll("mango", "apple"); // Prints - mango apple

// printAll("fire", "water", "ice"); // Prints - fire water ice gas

//default parameters
// function findInterest(p, r = 5, t = 1) {
//   console.log("Interest over", t, "years is:", (p * r * t) / 100);
// }
// findInterest(1000); // Prints - Interest over 1 years is: 50
// findInterest(1000, 7); // Prints - Interest over 1 years is: 70
// findInterest(1000, 8, 2); // Prints - Interest over 2 years is: 160

// Rest Parameter / Var-args
// function addAtLeastThree(a, b, c,...numbers) {
//   var sum = a + b + c;
//   console.log(numbers); // Arrray containing the rest parameter if any
//   for (var i = 0; i < numbers.length; ++i) {
//     sum += numbers[i];
//   }
//   return sum;
// }
// console.log(addAtLeastThree(10, 20, 30, 40, 50)); // Prints - 150

//  console.log(addAtLeastThree(12,23,45)); //prints 80

// hoisting

// Varible hoisting

//  console.log(a); //prints 'undefined' because only the variable declaration is moved to the top and not it’s definition
// var a =  10

//  let a = 20 	// Uncaught ReferenceError: Cannot access 'a' before initialization

// function hoisting

// f()
// function f(){
// 	console.log("function hoisting")
// }

// functions with in functions

// function outer(){
// 	let i=0;
// 	function middle(){
// 		function inner(){
// 			i=10
// 			console.log("inner",i);
// 		}
// 		inner()
// 		console.log("middle",i);

// 	}
// 	//inner() // REference Error : inner is not defined
// 	console.log("outer",i)
// 	middle()
// 	console.log("outer",i)
// }
// outer()

//function expression
// var factorial = function fac(n) {
//   return n < 2 ? 1 : n * fac(n - 1);
// };
// console.log(factorial(3)); // print - 6
//  console.log(fac(3)); // fac is not defined

// Anonymous Functions
//console.log(factorial) // print undefined bcoz factorial is declared as undefined
//console.log(factorial(3)); //TypeError: factorial is not a function
// var factorial = function (n) {
//   var ans = 1;
//   for (var i = 2; i <= n; i++) 
//     ans *= i;
//     return ans;
//   }

// console.log(factorial(3));


// passing functions / Callbacks
// 	function factorial(n){
// 		let ans=1;
// 		for(let i=1;i<=n;i++)
// 			ans*=i;
// 		return ans;
// 	}

// var ncr  = function(n,r,fact){
// 	return fact(n)/(fact(r) * fact(n-r))
// }	
//console.log(ncr(5,3,factorial))  // factorial is passed as callback to ncr

// var ncr  = function(n,r,fact){
// 	return fact(n)/(fact(r) * fact(n-r))
// }

//  //// following function is a callback functions passed to ncr()
// console.log( ncr(5,3,function (n){
// 	let ans=1;
// 	for(let i=1;i<=n;i++)
// 		ans*=i;
// 	return ans;
// 	})
// );
	
//following function is passed as callback to another function
// setTimeout(function(){
// 	console.log("Timer 2 sec");
// },2000)

