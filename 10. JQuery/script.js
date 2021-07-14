$('p').html("Hello");
$('.p1').css("color", 'red');
var color = $(".p1").css("color");
//console.log(color); // rgb(255, 0, 0)
$("#p2").css({
	"background-color": "green",
	"color":"white",
	"font-size":"25px"
});


// var p = $("p"); // return jquery object containing all paragraphs
// console.log(p); // jQuery.fn.init(3) [p, p.p1, p#p2, prevObject: jQuery.fn.init(1)]

// eq(index) returns jquery object on with jquery methods can be applied
// element[index] returns DOM element on which Jquery methods can't be applied

// console.log(p.eq(0)); // jQuery.fn.init [p, prevObject: jQuery.fn.init(3)]
// console.log(p.eq(1)); // jQuery.fn.init [p.p1, prevObject: jQuery.fn.init(3)]
// console.log(p.eq(2)); // jQuery.fn.init [p#p2, prevObject: jQuery.fn.init(3)]
// p.eq(0).css("color","blue"); 

// // p[index] return DOM element and Jquery can't apply to DOM element
// console.log(p[0]); // return HTML element <p style="color: blue;">Hello</p>
// console.log(p[1]); // <p class="p1" style="color: red;">Hello</p>
// console.log(p[2]); // <p id="p2" style="background-color: green; color: white; font-size: 25px;">Hello</p>

// p[0].html("haha")  // Uncaught TypeError: p[0].html is not a function

// p[0].innerHTML = "haha"; // this can be manipulated using JS

// Convert DOM element to Jquery object

// var p = $("p");
// p = p[2] // <p>Hello</p>
// p = $(p); // convert DOM element to JQuery object
// console.log(p); // jQuery.fn.init [p]
// p.text("HAhha")


// var d1 = $("#d1").html() // return the innerHTML
// console.log(d1);

// var d1 = $("#d1").text() // return the innerText 
// console.log(d1);

$(".box").css({
	width: "100px",
	border:"3px solid blue",
	height:"100px",
	backgroundColor:"red",
	color:"white",
	textAlign:"center",
});

$(".box").text("Click Me");

// It is same as AddEventlistener
// $(".box").on("click", function () {
// 	var box = $(this);
// 	$(this).width(box.width()+10 +"px");
// 	$(this).height(box.height()+10 +"px");
// 	console.log($(this));
// });

// Same as Above method
// $(".box").click(function () {
// 	var box = $(this);
// 	$(this).width(box.width()+10 +"px");
// 	$(this).height(box.height()+10 +"px");
// 	console.log($(this));
// });


// Binding multiple events with different handlers
$( ".box" ).on({
    "click": function() { 
		var box = $(this);
		$(this).width(box.width()+10 +"px");
		$(this).height(box.height()+10 +"px");
		console.log($(this));
	},
    "mouseenter": function() { $(this).css("background-color","green") },
	"mouseleave" : function() { $(this).css("background-color","red") }
});
