let btn = document.getElementById("btn");
let div = document.getElementById("d1");
console.log(btn.innerHTML)
btn.addEventListener("click",function(){
	var xhttp = new XMLHttpRequest();
	
	xhttp.onload=function(){
		if(this.status === 200){
			
			div.innerHTML =JSON.parse(this.responseText).p2.name;
			console.log()
			
		}else{
			console.log("not found")
		}
	}
	xhttp.open("GET","text.json",true);
	xhttp.send();
});