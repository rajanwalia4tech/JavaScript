// This keyword -> refers to the JS context object in which the current
// code is running or which object has called the function

// console.log(this); // window object


// function f(){
// 	console.log(this);  // window object
// }

// f();


// var f = function(){
// 	console.log(this); // window object
// }

// f();
// console.log(this)
// var obj = {
// 	name: "rajan",
// 	print: function () {
// 		console.log(this); // obj = {name: Window, print: ƒ}
// 	}
// }

// obj.print();

// var obj = {
// 	name: this, 
// 	print: ()=>{
// 		console.log(name )
// 		console.log(this); // window object
// 	}
// }

// obj.print();

var obj = {
	name: "rajan",
	student: {
		age: 22,
		print: () => {
			console.log(this); // window object
		},
		print2: function () {
			console.log(this);	// student object
		}
	}

}

// obj.student.print();
// obj.student.print2();


let z = obj.student.print2
console.log(typeof z)
z()