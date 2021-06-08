var button = document.getElementsByClassName("button");
var display = document.getElementById("display");
var smallDisplay = document.getElementById("small-display");

var operand1 = 0;
var operand2 = null;
var previousOperator = null
var operator = null;
var previousOutput = null;

function isOperator(currentKey){
	if(currentKey=="+" || currentKey=="-" || currentKey=="/" || currentKey=="*")
		return true;
	return false;	
}

function isValidOperation(key){
	console.log("called");
	if(previousOperator!=null && (isOperator(key) || key=="=")){
		return false;
	}
	return true;
}
function clear(){
	 operand1 = 0;
	 operand2 = null;
	 operator = null;
	 previousOperator = null;
	 previousOutput = null;
	 display.innerText = "";
	 
	 smallDisplay.innerText = "";
}

function isFloat(num){
	return num%1==0?false:true;
}
for(var i=0;i<button.length;i++){
	button[i].addEventListener("click",function (){
		let currentKey = this.getAttribute("data-value");
		let displayValue = display.innerText;
		if(isOperator(currentKey)){
			if(isValidOperation(currentKey)){
				if(previousOutput!=null){
					operand1 = previousOutput;
				}
				else{
					operand1 = display.innerText;
					previousOutput = operand1;
				}	
				operator = currentKey;
				smallDisplay.innerText = previousOutput+operator;
				display.innerText = "";
			}else{
				display.innerText = "Error";
			}
		}else if(currentKey == "="){
			if(operator == null)
				display.innerText = "Error";
			else{
				if(isValidOperation(currentKey)){
					operand2 = display.innerText;
					let result = eval(operand1 + " " + operator + " "+operand2)
					if(isFloat(result)){
						result = result.toFixed(3);
					}
					smallDisplay.innerText = result;
					previousOutput = result;
					operand1 = result;
					operand2 = 0;
					previousOperator = operator;
					operator = null
					display.innerText = "";
				}else{
					display.innerText = "Error";
				}
			
			}
		}else if(currentKey =="ac"){
			clear();
		}else if(currentKey =="sign" && displayValue!=""){
			let temp = display.innerText;
			display.innerText = -1* temp;
		}else{
			if(currentKey!="sign")
				display.innerText += currentKey;
		}
		console.log(operand1 +" "+operator+" "+operand2 + " "+ previousOutput +" "+displayValue);
	});
}


// for(var i=0;i<button.length;i++){
	
// 	button[i].addEventListener("click",function (){
// 		let currentKey = this.getAttribute("data-currentKey");
// 		let text  = display.innerText;
		
// 		if(isOperator(currentKey)){
// 			operator = currentKey;
// 			operand1 = parseFloat(text);
// 			display.innerText = "";
			
// 		}else if(currentKey=="ac"){
// 			operand1 = 0;
// 			operand2 = null;
// 			operator = null;
// 			display.innerText = "";
// 		}
// 		else if(currentKey=="sign"){
// 			operand1 = -1 * parseFloat(display.innerText);
// 			display.innerText = operand1;
			
// 		}else if( currentKey == "="){
// 			operand2 = parseFloat(text);
// 			t = operand1 + operator + operand2
// 			console.log(t,operator,operand2);
// 			var result = eval(operand1 + ' ' + operator + ' ' + operand2);
			
// 			if(result){
// 			operand1 = result;
// 			operand2 = null;
// 			operator = null;
// 			display.innerText = operand1.toFixed(2);
// 			}
// 		}else{
// 			display.innerText+=currentKey;
// 		}
// 		console.log(operand1,operand2,operator,currentKey,text);
// 	});
// }

