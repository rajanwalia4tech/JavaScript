
// Using IIFE - Imeadiately Invoke Function Expression
(function (){
	var name = "File1";
	setTimeout(()=>{
		console.log(name);
	},1000)
	console.log(name);
})();


//without IIFE
// function print1(){
// 	var name = "File1";
// 	setTimeout(()=>{
// 		console.log(name);
// 	},1000)
// 	console.log(name);
// }

// print1();