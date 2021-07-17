
let btnAdd = $("#btnAdd")
let ulTasks = $("#ulTasks")
let btnClear = $("#btnClear")
let inpText = $("#inpNewTask");

btnAdd.on({
	"click" : function () {
		var text = inpText.val();
		if(text.trim() =="")
			return;
		var listItem = $("<li></li>").addClass("list-group-item").text(text); // create element using Jquery
		console.log(listItem[0]);
		ulTasks.append(listItem);
		inpText.val("");
		console.log(text);
	}
});

btnClear.click(function (e) { 
	e.preventDefault();
	inpText.val("");
});

