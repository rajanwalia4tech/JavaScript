// EveryThing in JS is an object even functions

// Old way :- Creating functions using object
// function createStudent(name,rollNo){
// 	var student = {}; // or new Object();
// 	student.name = name;
// 	student.rollNo = rollNo;
// 	return student; 
// }

// var s1 = createStudent("rajan",12);
// var s2 = createStudent("AMan",23);
// console.log(s1); // {name: "rajan", rollNo: 12}
// console.log(s2); // {name: "AMan", rollNo: 23}

// constructor function in JS
//  function createStudent(name,rollNo){
	
// 	this.name = name;
// 	this.rollNo = rollNo;
// 	console.log(this);
// }
// var s1 = new createStudent("rajan",12); // create object using constructor
// console.log(s1);

// var s2 = createStudent("aman",23); // calling the function
// console.log(s2);


// Adding behaiviours to objects
// here in JS each object has its own functions rather in other programming languages
// A single function is bind to all objects
// To understand this concept we need to understand prototypes in JS.

//  function createStudent(name,rollNo){
	
// 	this.name = name;
// 	this.rollNo = rollNo;
// 	this.getName = function () { return this.name }
// 	this.getRollNo =function (){
// 		return this.rollNo;
// 	}
// }
// var s1 = new createStudent("rajan",12); // create object using constructor
// console.log(s1);  // createStudent {name: "rajan", rollNo: 12, getName: ƒ, getRollNo: ƒ}
// console.log(s1.getName()); // rajan

// var s2 = new createStudent("Aman",12); // create object using constructor
// console.log(s2); // createStudent {name: "Aman", rollNo: 12, getName: ƒ, getRollNo: ƒ}


