// f()
// function f(){ // hoisted
// 	console.log("hello")
// }
// f()

// Named functions / function expression can't called before defined
//f() // REferenceError: f is not defined
// f = function func2(){
// 	console.log("f2");
// }
// f()
// func2()  // REferenceError: func2 is not defined

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
//  console.log(add(1));		// 1 undefined undefined NaN
// console.log(add(1, 2, 3));  // 1 2 3	6

//Arguments in Functions
// function printAll() {
//   for (var i = 0; i < arguments.length; ++i) {
//     console.log(arguments[i]);
//   }
// }
//printAll("mango", "apple"); // Prints - mango apple

//printAll('fire', 'water', 'ice', 'gas'); // Prints - fire water ice gas

// function printAll(a,b) {
// 	console.log(arguments.length)
// 	console.log(a,b,arguments[0],arguments[1]);
//   for (var i = 0; i < arguments.length; ++i) {
//     console.log(arguments[i]);
//   }
// }
//printAll("mango", "apple"); // Prints - mango apple

// printAll("fire", "water", "ice"); // Prints - fire water ice gas

// var sum = function () {
// 	console.log(arguments); // [12, 23, callee: (...), Symbol(Symbol.iterator): ƒ]
//  }
// sum(12,23);

// var  sum = (a,b)=>{
// 	console.log(arguments); // arguments not defined in arrow functions
// }
// sum(12,23);

//default parameters
// function findInterest(p, r = 5, t = 1) {
//   console.log(arguments) // arguments array will only take the send parameters not default parameters
//   console.log("Interest over", t, "years is:", (p * r * t) / 100);
// }
// findInterest(1000); // Prints - Interest over 1 years is: 50
// findInterest(1000, 7); // Prints - Interest over 1 years is: 70
// findInterest(1000, 8, 2,3); // Prints - Interest over 2 years is: 160

// Rest Parameter / Var-args -- rest parameter must be the last statement
// function addAtLeastThree(a, b, c,...numbers) {
//   var sum = a + b + c;
//   console.log(arguments)
//   console.log(numbers); // Arrray containing the rest parameter if any
//   for (var i = 0; i < numbers.length; ++i) {
//     sum += numbers[i];
//   }
//   return sum;
// }
// console.log(addAtLeastThree(10, 20, 30, 40, 50)); // Prints - 150

// console.log(addAtLeastThree(12,23,45)); //prints 80

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
// let j = 1000;
// function outer(){// 0 10, 10 20, 10 10, 10 10
//  console.log(j);
// 	let i=0;
// 	var j = 10;
//     console.log(j)
// 	function middle(){

// 		function inner(){
// 			i=10
// 			var j=20; // can be use inside this block only
// 			console.log("inner",i,j);
// 		}
// 		inner()
// 		console.log("middle",i,j);
// 	}
// 	//inner() // REference Error : inner is not defined
// 	console.log("outer",i,j)
// 	middle()
// 	console.log("outer",i,j)
// }
//  outer()

//function expression
// console.log(factorial) // print undefined bcoz factorial is declared as undefined
// console.log(factorial(3)); // Uncaught TypeError: factorial is not a function
// var factorial = function fac(n) {
//   return n < 2 ? 1 : n * fac(n - 1);
// };
// console.log(factorial(3)); // print - 6
//  console.log(fac(3)); // fac is not defined

// Anonymous Functions
// console.log(factorial) // print undefined bcoz factorial is declared as undefined
// console.log(factorial(3)); //TypeError: factorial is not a function
// var factorial = function (n) {
//   var ans = 1;
//   for (var i = 2; i <= n; i++)
//     ans *= i;
//     return ans;
//   }

//  console.log(factorial(3));


// passing functions / Callbacks
// function factorial(n) {
//   let ans = 1;
//   for (let i = 1; i <= n; i++)
//     ans *= i;
//   return ans;
// }

// var ncr = function (n, r, fact) {
//   return fact(n) / (fact(r) * fact(n - r))
// }
// console.log(ncr(5, 3, factorial))  // factorial is passed as callback to ncr


// following function is a callback functions passed to ncr()
// console.log(ncr(5, 3, function (n) {
//   let ans = 1;
//   for (let i = 1; i <= n; i++)
//     ans *= i;
//   return ans;
// })
// );

//following function is passed as callback to another function
// setTimeout(function () {
//   console.log("Timer 2 sec");
// }, 2000)

// setTimeout(function () {
//   console.log("timer 1 sec");
// }, 1000)
