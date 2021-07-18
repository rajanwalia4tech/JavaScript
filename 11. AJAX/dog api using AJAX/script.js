var fetchBtn = document.getElementById("fetchBtn");
var dogImg = document.getElementById("dogImg");

// XHR AJAX using JS
fetchBtn.addEventListener("click",function(){
	var xhr = new XMLHttpRequest();

	xhr.onload = function(){
		if(this.status == 200){
			// here this is a xhr object
			var responseJSON = JSON.parse(this.response);
			// console.log(responseJSON.message); 
			var imgURL = responseJSON.message;
			dogImg.setAttribute("src",imgURL);
		}else{
			console.log("Response not found")
		}
	};
	
	xhr.onerror = function(){
		console.log("Response Fail");
	};
	// true is used to make Asynchronous calls
	xhr.open("GET","https://dog.ceo/api/breeds/image/random",true);
	xhr.send();
	console.log("hello");
});



// AJAX using Jquery
// $("#fetchBtn").click(function (e) { 
// 	e.preventDefault();
// 	$.ajax({
// 		method: "GET",
// 		url: "https://dog.ceo/api/breeds/imagee/random",
// 		success: function (data) {
// 			var imgURL = data.message;
// 			$("#dogImg").attr("src",imgURL);
// 		}
// 	}).fail(function (){
// 		console.log("Response fail");
// 	})
// });

// Direct AJAX get request using JQuery
// $("#fetchBtn").click(function (e) {
// 	$.get("https://dog.ceo/api/breeds/image/random",
// 		function (data) {
// 			var imgURL = data.message;
// 			$("#dogImg").attr("src", imgURL);
// 		}
// 	).fail(function (){
// 		console.log("Response fail");
// 	})
// });