testImages = [
	"https://i.ytimg.com/vi/lA2ODwH-e0g/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDuQM9gLtjvFElW7m4cThApJQiApw"	
];

alert("helelo")

const imgs = document.getElementsByTagName("img");
for(let i=0;i<imgs.length;i++){
	const randomImg = Math.floor(Math.random() * testImages.length);
	imgs[i].src = testImages[randomImg];
	console.log("hello")
}

const links = document.getElementsByTagName("a");
for(let i=0;i<links.length;i++){
	links[i].innerText = "Hello LInks";
	links[i].style.color = "green";
}