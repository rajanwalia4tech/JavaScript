// console.log(Object);

// console.log(Object.prototype);

// let obj = new Object();
// console.log(obj); 
// console.log(Object.prototype.isPrototypeOf(obj)); // Obj inherits Object

// function Student(name,rollNo){
// 	this.name = name;
// 	this.rollNo = rollNo;
// }

// Student.prototype.getName = function () { return this.name; }

// var s1 = new Student("rajan",12);

//console.log(s1.subject); // undefined

// S1 is an Object which inherit Student.prototype and Student.prototype inherit Object.prototype

// Student.prototype.subject = "Maths";
// console.log(s1.subject); // MAths

// Object.prototype.subject = "English";
// console.log(s1.subject);//Maths 
// console.log(s1.hasOwnProperty("subject"));

// s1.subject = "Java"; // subject is property of s1 object only
// console.log(s1);
// console.log(s1.hasOwnProperty("subject"));

//  Object vs object
// Object is a constructor Function
// console.log(typeof Object); // Function

// object is a datatype collection of key value pairs
// var obj= {};
// console.log(typeof obj); // object

// classes introduced in Es6
// classes are syntactical sugar over function prototypes
// Hoisting concept is not applicable for class

// class Student{
// 	constructor(name,rollNo){
// 		this.name = name;
// 		this.rollNo = rollNo;
// 	}
	
// 	getName(){ return this.name}
// }

// console.log(typeof Student); // function
// var s1 = Student("raja",23) // Error: Uncaught TypeError: Class constructor Student cannot be invoked without 'new'
// var s1 = new Student("raja",23);
// console.log(s1);  // Student {name: "raja", rollNo: 23}

// console.log(s1.__proto__); // {constructor: ƒ, getName: ƒ}
// console.log(Student.prototype); // {constructor: ƒ, getName: ƒ}

// console.log(Object.getPrototypeOf(s1) == Student.prototype);

// Class Expression are allowed
// var Student = class {
// 	constructor(name,rollNo){
// 		this.name = name;
// 		this.rollNo = rollNo;
// 	}
	
// 	getName(){ return this.name}
// }

// var s1 = new Student("rajan",34);
// console.log(s1);


// Inheritance in JS
class Animal{
	constructor(legs,color){
		this.legs = legs;
		this.color = color;
	}
	printDetails(){
		console.log("legs : " + this.legs+", Color : "+ this.color);
	}
}

class Dog extends Animal{
	constructor(name,tail){
		super(4,"black");
		this.tail = tail;
		this.name = name;
	}
	bark(){
		console.log(this.name+" is barking");
	}
	printDetails(){
		super.printDetails();
		console.log("Tail : " + this.tail+" Name : "+ this.name);
	}
}

var d = new Dog("Rocky",true);
d.printDetails();



