// Each object has its prototype from where common properties are inherited
// without prototypes creating methods in JS share individual memory space

// function Student(name,rollNo){
// 	this.name = name;
// 	this.rollNo = rollNo;
// 	this.getName = function () { return this.name }
// 	this.getRollNo =function (){
// 		return this.rollNo;
// 	}
// }

// var s1 = new Student("RAjan",12);
// console.log(s1); // Student {name: "RAjan", rollNo: 12, getName: ƒ, getRollNo: ƒ}

// var s2 = new Student("Aman",22);
// console.log(s2); // Student {name: "Aman", rollNo: 22, getName: ƒ, getRollNo: ƒ}

// With Prototypes a data/method is shared with each object.
// With this first interpreter look in the object whether mehtod/data is their
//then look in the prototype

// function Student(name,rollNo){
// 	this.name = name;
// 	this.rollNo = rollNo;
// }
// Student.prototype.className = "MCA"; // Common to each object
// Student.prototype.getName = function () { return this.name } // Common to each object
// Student.prototype.getRollNo =function (){ return this.rollNo } // Common to each object

// var s1 = new Student("RAjan",12);
// console.log(s1); // Student {name: "RAjan", rollNo: 12 }
// console.log(s1.getName()); // RAjan
// console.log(s1.className); // MCA
// var s2 = new Student("Aman",22);
// console.log(s2); // Student {name: "Aman", rollNo: 22 }
// console.log(s2.getName()); // BCA

function Student(name,rollNo){
	this.name = name;
	this.rollNo = rollNo;
}
Student.prototype.className = "MCA"; // Common to each object
Student.prototype.getName = function () { return this.name } // Common to each object
Student.prototype.getRollNo =function (){ return this.rollNo } // Common to each object

var s1 = new Student("RAjan",12);
console.log(s1.className); // MCA
s1.className = "BCA"; // this adds new property to s1 only 
console.log(s1); // Student {name: "RAjan", rollNo: 12, className: "BCA"}
console.log(s1.className); // BCA

var s2 = new Student("Aman",22);
console.log(s2);  // Student {name: "Aman", rollNo: 22}

console.log(Student);


// hasOwnProperty
// ispropertyof