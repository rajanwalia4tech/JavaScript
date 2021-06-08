// console.log("hello")


// // objects are stored as key value pairs
// // keys are stored as string
// var student = {
// 	"first name": "rajan",
// 	rollNo : 123,
// 	address : "yamuna nagar"
// }

// console.log(student);
// console.log(student.rollNo);
// console.log(student["first name"])
// console.log(student["address"])

// console.log(student.mobile); //undefined
// student.mobile =  464566872093,//now mobile added in object
// console.log(student)

// delete student["first name"] // delete the first name property
// delete student.rollNo // delete the rollNo property
// console.log(student);



// how objects are stored in memory

// var obj1 = {
// 	a:100,
// 	b: 200
// };

// var obj2 = obj1;  //obj1 and obj2 are pointing to same location
// console.log(obj2);
// obj2.a = 500;
// console.log(obj1); 
// obj2.c = 30	// c added to the objects
// console.log(obj1);
// console.log(obj1 == obj2); //true -> compairing the addresses
// console.log(obj1 === obj2); //true

// delete obj1.c


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
 
//  // using for in method
//   for(var s in student)  //s wil contain key
//  	console.log(s ,student[s]);
	 
// // using  keys

// var keys = Object.keys(student) //return array of keys
// console.log(keys);


// //iterate over array to get value
// for(var i=0;i<keys.length;i++)
//  console.log(student[keys[i]]);
 
//  keys = Object.getOwnPropertyNames(student);  //return array of keys
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
// console.log(a["0"]); //print - 1
// console.log(a["length"]); //print the length -3
// console.log(a["__proto__"]);

// we can also add a key in array like in object
// But length of array will only be the actual integer indexes

// var a = [12,23,34];
// a.name = "rajan" 	//new name key created
// a["rollNo"] = "123"; // new rollNo. key created
// console.log(a); //[12, 23, 34, name: "rajan", rollNo: "raj"]
// console.log(a.length);   // 3
// console.log(a.name);
// console.log(a["rollNo"]);

// // we can also iterate over arrays as object it will print all keys
// // keys are indexs as well as the keys
// for(var i in a)
// 	console.log(i);
	
// delete a.name  //name key deleted
// console.log(a);





// Timing functions

// 1. setTimeout() 
// function sayGM(){
// 	console.log("Good Morning");
// }

// setTimeout(sayGM,2000);  // execute the function after 2 second and next statements will execute

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
//  var id = setInterval(timer,100) // runs till 9
//  console.log( "id" ,id);
 
//  setTimeout(timer,1000) //? doubt