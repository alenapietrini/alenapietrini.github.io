function showP(){
	let p=document.getElementById("p");
	let myLink=document.getElementById("link");
	
	if(p.classList.contains("hidden")){
		p.classList.remove("hidden");
		myLink.innerHTML="Show Less";
	}
	else{
		p.classList.add("hidden");
		myLink.innerHTML="See More";
	}
}
function showPP(){
	let p=document.getElementById("pp");
	let myLink=document.getElementById("link2");
	
	if(p.classList.contains("hidden")){
		p.classList.remove("hidden");
		myLink.innerHTML="Show Less";
	}
	else{
		p.classList.add("hidden");
		myLink.innerHTML="See More";
	}
}

function showResults(){
	let resultP=document.getElementById("result");
	let scoreP=document.getElementById("score");
	let answer1=document.getElementById("answer1").value;
	let answer2=document.getElementById("answer2").value;
	let answer3=document.getElementById("answer3").value;
	let answer4=document.getElementById("answer4").value;
	result.classList.remove("hidden");
	score.classList.remove("hidden");
	let num=0;
	
	if(answer1=="h1"){
		result.innerHTML+="Question 1 - Correct";
		num += num + 1;
	}
	else if (answer1=="h2", "h3", "h5"){
		result.innerHTML+="<p>Question 1 - Incorrect</p>";
	}

	if(answer2=="br"){
		result.innerHTML+="<p>Question 2 - Correct</p>";
		num += num + 1;
	}
	else if (answer2=="BR", "Br", "break"){
		result.innerHTML+="<p>Question 2 - Incorrect</p>";
	}
	
	if(answer3=="Cascading Style Sheets"){
		result.innerHTML+="<p>Question 3 - Correct</p>";
		num += num + 1;
	}
	else if (answer3=="Creative Styling Sheet", "Cascading Single Sheet", "Condense Style Sheet"){
		result.innerHTML+="<p>Question 3 - Incorrect</p>";
	}
	
	if(answer4=="*"){
		result.innerHTML+="<p>Question 4 - Correct</p>";
		num += num + 1;
	}
	else if (answer4=="x", "+", "#"){
		result.innerHTML+="<p>Question 4 - Incorrect</p>";
	}
	score.innerHTML="<p>" + "Score: " + num + "/4" + "</p>";
}

setInterval(changeSlide, 10000);
function changeSlide(){
	let mom=document.getElementById("mom");
	let pop=document.getElementById("pop");
	let paige=document.getElementById("paige");
	let paul=document.getElementById("paul");
	
	if(!mom.classList.contains("hidden")){
		paige.classList.remove("hidden");
		mom.classList.add("hidden");
	}
	
	else if(!paige.classList.contains("hidden")){
		pop.classList.remove("hidden");
		paige.classList.add("hidden");
	}
	
	else if(!pop.classList.contains("hidden")){
		paul.classList.remove("hidden");
		pop.classList.add("hidden");
	}
	
	else if(!paul.classList.contains("hidden")){
		mom.classList.remove("hidden");
		paul.classList.add("hidden");
	}
}
