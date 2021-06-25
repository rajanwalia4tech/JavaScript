
//Create an array
// a =[1,2,3];
// console.log(a);				// [1,2,3]
// console.log(a.length);		// 3
// console.log(a[0],a[5]);		// 1 undefined
// a[5] = 34;

// console.log(a);				// [1, 2, 3, empty × 2, 34]
// console.log(a[4]=33);		// 33
// console.log(a)				// [1, 2, 3, empty, 33, 34]

// create an array using new keyword

//create  pushes the element in the array
// a = new Array(1,2,"raja")
// console.log(a);					// [1, 2, "raja"]
// //create 2d array
// a= new Array(a,a);
// console.log(a)					// [[1, 2, "raja"], [1, 2, "raja"]]
// console.log(a.length);			// 2
// console.log(a[1][2])			// 3
// //console.log(a[2][2])			// TypeError: Cannot read property '2' of undefined
// console.log(a[1].length);		// 3


// here 2 is the size of array
// a = new Array(2);
// console.log(a)

// here raja is element pushes in the array
//  a = new Array("raja");
//  console.log(a);


//function methods
// a = [12,"rajan",12/5]
// console.log(a);
// a.push(122) //push at the end
// console.log(a);
// a.pop() //  Pop from the end
// console.log(a);

// a.shift() // pop from the front
// console.log(a);
// a.unshift(99) // insert at front
// console.log(a);


//a = [12,23,43,56]

//a.splice(1,1); // delete 1 element form 1st index
//console.log(a);	// [12,43,56]
// a.splice(1,0,"rajan","walia") // insert first element from 1st index and 0 shows not item delete
// console.log(a);

// console.log(a.splice(2,23,122)); // delete 23 elements from 2nd index and then insert 122 at 2nd index
// console.log(a);


// iterating ver Arrays
// a = [12,23,22,33]
// for(let i=0;i<a.length;i++)
// 	console.log(a[i])
	

 a = [12,23,22,33]
// console.log("\n")
// function print(e){
// 	console.log(e);
// }
// a.forEach(print);

// console.log("\n");
// a.forEach(function (e) {
// 	console.log(e)
//   })
  
//  console.log("\n")
//  a.forEach((e)=>{ console.log(e)
//  })

// a.forEach( e => console.log(e));