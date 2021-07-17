
let print = document.getElementById("print");
let list = document.getElementById('list');
console.log(text);
print.onclick = ()=>{
	console.log(new  Date().getTime())
	let start = new  Date().getTime()
	let text = document.getElementById("text").value;
	let item = document.createElement('li');
	list.appendChild(item);
	for(let j=1;j<=parseInt(text);j++){
		let item = document.createElement('li');
		item.innerText = "hello"+j;
		list.appendChild(item);
	}
	let end = new Date().getTime()
	console.log(end)
	console.log(end - start);
}





// let print = document.getElementById("print");
// let list = document.getElementById('list');
// console.log(text);
// print.onclick = ()=>{
// 	console.log(new  Date().getTime())
// 	let start = new  Date().getTime()
// 	let text = document.getElementById("text").value;
// 	let listHtml =""
// 	for(let j=1;j<=parseInt(text);j++)
// 	listHtml += "<li> hello"+j+"</li>"; // store in variable
// 	list.innerHTML = listHtml // then store whole in html/browser
// 	let end = new Date().getTime()
// 	console.log(end)
// 	console.log(end - start);
// }


// below innerHTML is  updates every time in browser.

// let print = document.getElementById("print");
// let list = document.getElementById('list');
// console.log(text);


// print.onclick = ()=>{
// 	console.log(new  Date().getTime())
// 	let start = new  Date().getTime()
// 	let text = document.getElementById("text").value;
// 	for(let j=1;j<=parseInt(text);j++)
// 	list.innerHTML+= "<li> hello"+j+"</li>";
// 	let end = new Date().getTime()
// 	console.log(end)
// 	console.log(end - start);
// }
