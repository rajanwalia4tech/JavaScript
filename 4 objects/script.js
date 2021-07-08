// console.log("hello")


// objects are stored as key value pairs
// keys are stored as string
var student = {
	"first name": "rajan",
	rollNo : 123,
	address : "yamuna nagar"
}

// console.log(student);	// {first name: "rajan", rollNo: 123, address: "yamuna nagar"}
// console.log(student.rollNo);	// 123
// console.log(student["first name"]) // rajan
// console.log(student["address"])		// yamuna nagar

// console.log(student.mobile); //undefined
// student.mobile =  464566872093,//now mobile added in object
// console.log(student)

// delete student["first name"] // delete the first name property
// delete student.rollNo // delete the rollNo property
// console.log(student);	// {address: "yamuna nagar"}



// how objects are stored in memory

var obj1 = {
	a:100,
	b: 200
};

// var obj2 = obj1;  //obj1 and obj2 are pointing to same location
// console.log(obj2); // {a: 100, b: 200}
// obj2.a = 500;
// console.log(obj1); // {a: 500, b: 200}
// obj2.c = 30	// c added to the objects
// console.log(obj1);	// {a: 500, b: 200, c: 30}
// console.log(obj1 == obj2); //true -> compairing the addresses
// console.log(obj1 === obj2); //true

// delete obj1.c
// console.log(obj1);	// {a: 100, b: 200}

// var obj3 = {
// 	a:500,
// 	b:200
// };

// console.log(obj1==obj3); //false
// console.log(obj1===obj3); // false


//  var student = {
	
// 	 rollNo: 123,
// 	 mobile:35345435,
// 	 name :"rajan",
// 	 3 :"two",
// 	 1:"one"
//  }
 
 // student.1 = 345	// SyntaxError: Unexpected number
 // student["1"] = 345 
 // console.log(student);
 
 
// using for in method
//   for(var s in student)  //s wil contain key
//  	console.log(s ,student[s]);
	 
// // using  keys

// var keys = Object.keys(student) // return array of keys -> ["1", "3", "rollNo", "mobile", "name"]
// console.log(keys);


// //iterate over array to get value
// for(var i=0;i<keys.length;i++)
//  console.log(student[keys[i]]);
 
//  keys = Object.getOwnPropertyNames(student);  //return array of keys -> ["1", "3", "rollNo", "mobile", "name"]
//  console.log(keys);




// Nested objects

//  var student = {
	
// 	 rollNo: 123,
// 	 mobile:35345435,
// 	 name :"rajan",
// 	 address:{
// 		 city:"YNR",
// 		 state:"Haryana"
// 	 }
//  }
//  console.log(student.address.city );
//  console.log(student.address["state"]);


//arrays are objects in JS means that arrays are also stored as key value pairs

// var a =[10,20,30]
// console.log(a);
// console.log(a["0"]); //print - 10
// console.log(a["length"]); //print the length -3
// console.log(a["__proto__"]);

// we can also add a key in array like in object
// But length of array will only be the actual integer indexes
// that can be created

var a = [12,23,34];
// a.name = "rajan" 	//new name key created
// a["rollNo"] = "123"; // new rollNo. key created
// console.log(a); //[12, 23, 34, name: "rajan", rollNo: "raj"]
// console.log(a.length);   // 3
// console.log(a.name);	// rajan
// console.log(a["rollNo"]);	// 123
// a["5"] = 34;	// integer index
// console.log(a);		// [12, 23, 34, empty × 2, 34, name: "rajan", rollNo: "123"]
// console.log(a.length); // length is 6 


// // we can also iterate over arrays as object it will print all keys
// // keys are indexs as well as the keys
// for(var i in a)
// 	console.log(i);
	
// delete a.name  //name key deleted
// console.log(a);


// var a = [12,23,34];
// delete a[2]
// console.log(a.length);	// length is same -> 3


// Timing functions

// 1. setTimeout() -> takes minimum time after which the function execute
// function sayGM(){
// 	console.log("Good Morning");
// }

// setTimeout(sayGM,2000);  // execute the function after the following 2 loops

// for(let i=0;i<5000;i++)
// 	console.log(i);

// for(let i=0;i<5000;i++)
// 	console.log(i);



// setTimeout(function(){
// 	console.log("Good  Evenning");
// },4000);  // execute the function after 4 second and next statements will execute

// 2. setInterval() -> execute the functions repeadly after given time and return the id which is used to stop its exceution using clearinterval()

// var time = 1;
// function timer(){
// 	console.log(time++)
// }

// setInterval(timer,1) // runs infinetly

// 3. clearInterval() -> used to stop the setInterval() using the return ID

// var time = 1;
// function timer(){
// 	console.log(time++)
// 	if(time == 11){
		
// 		clearInterval(id)
// 		console.log("times up!!");
// 	}
// }
 // var id = setInterval(timer,100) // runs till 10
 
// console.log( "id" ,id);
 
//  for(let i=0;i<5000;i++)
// 	console.log(i);

//  setTimeout(timer,1000)