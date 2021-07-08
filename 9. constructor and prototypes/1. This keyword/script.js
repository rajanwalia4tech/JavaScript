// This keyword -> refers to the JS context object in which the current
// code is running

// console.log(this); // window object


// function f(){
// 	console.log(this);  // window object
// }

// f();

// var f = function(){
// 	console.log(this); // window object
// }

// f();

// var f = ()=>{
// 	console.log(this); // window object
// }

// f();

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
