'use strict'

//  console.log(this); // window object

 
// function f(){
// 	console.log(this);  // undefined
// }

// f();

// var f = function(){
// 	console.log(this); // undefined
// }

// f();

// var f = ()=>{
// 	console.log(this); // window object
// }

//  f();

// var obj = {
// 	name:this, 
// 	print:function(){
// 		console.log(this); // obj = {name: Window, print: ƒ}
// 	}
// }

// obj.print();

// var obj = {
// 	name:"rajan", 
// 	print: ()=>{
// 		console.log(this); // window object
// 	}
// }

// obj.print();

// var obj = {
// 	name:"rajan", 
// 	student:{
// 		print: ()=>{
// 			console.log(this); // window object
// 		},
// 		print2: function(){
// 			console.log(this);	// student object
// 		}
// 	}
	
// }

// obj.student.print();
// obj.student.print2();


// var obj={
// 	name:"rajan",
// 	class:"10th"
// }


// function f(){
// 		console.log(this);  
// }

// f(); // undefined
// f.call(window); // bound with window object
// f.call(obj) // bound with obj = {name: "rajan", class: "10th"}
// f.apply(obj); //bound with obj =  {name: "rajan", class: "10th"}


// Diference b/w call and apply method in type of argument

// var obj={
// 	name:"rajan",
// 	class:"10th"
// }


// function f(a,b){
// 		console.log(this);  
// 		console.log(a,b);
// 		console.log(arguments);
// }

// f.call(obj,12,34); // call take normal values
// f.apply(obj,[10,23]);  // apply takes array


// var obj={
// 	name:"rajan",
// 	class:"10th"
// }


// var f = (a,b)=>{
// 		console.log(this);  // pointing to window object
// 		console.log(a,b);
//		console.log(arguments); // not defined in arrow functions
// }

// f.call(obj,12,34); // call take normal values
// f.apply(obj,[10,23]);  // apply takes array

