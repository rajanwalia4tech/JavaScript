
var links = document.querySelectorAll(".nav-items a")
var id;


for(let i=0;i<links.length;i++){
	
	links[i].addEventListener("click",function(event){
		event.preventDefault();
		let length = links[i].href.length
		var section = links[i].href.substring(length-8).trim().toLowerCase();
		console.log(section);
		var targetSection = document.getElementById(section);
		console.log(targetSection);
		// let id = setInterval(function(){
		// 	var targetSectionCordinates = targetSection.getBoundingClientRect();
		// 	if(section == "section7" && targetSectionCordinates.top<=240){
		// 		clearInterval(id);
		// 		console.log(targetSectionCordinates.top);
		// 		return ;
		// 	}
			
		// 	else if(targetSectionCordinates.top<=0){
		// 		clearInterval(id);
		// 		console.log("clear ",section)
				
		// 	}
		// 	window.scrollBy(0,50);
		// },20);
		
		id = setInterval(scrollVertically,20,section,targetSection)
		
	})
}

function scrollVertically(section,targetSection){
	var targetSectionCordinates = targetSection.getBoundingClientRect();
	if(section == "section7" && targetSectionCordinates.top<=240){
		clearInterval(id);
		console.log(targetSectionCordinates.top);
		return ;
	}
	else if(targetSectionCordinates.top<=0){
		clearInterval(id);
		console.log("clear ",section)
		
	}
	window.scrollBy(0,50);
}










// var positions = [720,3343,2643,1543,1843,4143]

// var links = document.querySelectorAll(".nav-items .item a")

// for(let i=0;i<links.length;i++){
// 	let curposition = 0;
// 	links[i].addEventListener("click",function(event){
// 		event.preventDefault();
// 		let scrollItem = function(){
// 			if(curposition>=positions[i]-50){
// 				console.log("doen");
// 				clearInterval(id);
// 			}
// 			curposition+=50;
// 			window.scrollBy(0,curposition);
// 			console.log(curposition);
// 		}
// 		let id = setInterval(scrollItem,20);
// 	})
// }