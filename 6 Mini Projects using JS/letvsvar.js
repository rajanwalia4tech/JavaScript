// var has a global scope here

// for(var i=1;i<=5;i++){ 
// 	setTimeout(function(){
// 		console.log(i);				// print - 10 10 10 10 10 
// 	},2000);
// }

// i=10; // here i is changed to 10 
// setTimeout(function(){
// 	console.log(i);
// },1000);



// let has a block scope so every time 
for(let i=1;i<=5;i++){ 
	setTimeout(function(){
		console.log(i);				// print - 1 2 3 4 5 
	},2000);
}
