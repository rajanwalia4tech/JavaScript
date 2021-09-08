let input = document.querySelector("#input");
let searchBtn = document.querySelector("#search");
let apiKey = 'f053ed4d-60c0-4f40-bd8e-ba36abf7ebec';
let notFound = document.querySelector(".not__found");
let defBox = document.querySelector(".definition");
let audioBox = document.querySelector(".audio");
let loading = document.querySelector(".loading");

searchBtn.addEventListener('click',function(e){
	defBox.innerHTML = "";
	notFound.innerHTML = "";
	audioBox.innerHTML = "";
	//get input data
	let word = input.value.trim();
	if(word === ''){
		alert("Please Enter the Word to search");
		return ;
	}
	// Call API 
	getData(word);
});

async function getData(word){
	loading.style.display = "block";
	// Ajax Call
	notFound.innerHTML = "";
	const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`);
	const data = await response.json();
	
	if(data.length == 0){
		loading.style.display = "none";
		notFound.display = "block";
		notFound.innerHTML = "<h2>Not Found</h2>";
		return;
	}
	
	// Print the Suggestions
	if(typeof data[0] == "string"){
		loading.style.display = "none";
		let heading = document.createElement("h2");
		heading.innerHTML= " Did you Mean?";
		notFound.appendChild(heading)
		data.forEach(element => {
			let suggestion = document.createElement("a");
			suggestion.addEventListener("click",function(e){
				e.preventDefault();
				input.value = element;
				notFound.innerHTML = "";
				getData(element);
			});
			suggestion.classList.add("suggested");
			suggestion.innerHTML = element;
			notFound.appendChild(suggestion);
		});
		return ;
	}
	// Result found
	loading.style.display = "none";
	defBox.innerHTML =  data[0]["shortdef"][0];
	
	// Add sound
	const soundName = data[0].hwi.prs[0].sound.audio;
	// if sound exists for the given Word
	if(soundName)
		addSound(soundName);
}

function addSound(soundName){
    // https://media.merriam-webster.com/soundc11
	 let subfolder = soundName.charAt(0);
	 let soundSrc = `https://media.merriam-webster.com/soundc11/${subfolder}/${soundName}.wav?key=${apiKey}`;

	 let aud = document.createElement('audio');
	 aud.src = soundSrc;
	 aud.controls = true;
	 audioBox.appendChild(aud);
}