/* ------
	JS script to handle basic animations for 
	desktop only and quote generator


	Author: Austin Essinger
   ------	*/ 
const quotes = [
	{
		"quote": "A computer once beat me at chess, but it was no match for me at kick boxing.",
		"author": "Emo Philips"
	},
	{
		"quote": "The computer was born to solve problems that did not exist before.",
		"author": "Bill Gates"
	},
	{
		"quote": "Where is the 'any' key?",
		"author": "Homer Simpson"
	},
	{
		"quote": "What's the point if you can't wear sandals on a motorcycle",
		"author": "Chad Andrews"
	},
	{
		"quote": "I am Beyonce always.",
		"author": "Michael Scott"
	},
	{
		"quote": "Roads? Where we're going, we don't need roads!",
		"author": "Doc Brown"
	},
	{
		"quote": "I really should have a tweeter account.",
		"author": "Dwight Shcrute"
	},
	{
		"quote": "Failure is only the opportunity to begin again. Only this time, more wisely.",
		"author": "Uncle Iroh"
	},
	{
		"quote": "Dark times lie ahead of us and there will be a time when we must choose between what is easy and what is right.",
		"author": "Albus Dumbledore"
	}
];

const projects = Array.from(document.querySelectorAll(".project-img"));
const quoteText = document.getElementById("quote-text");
const quoteBy = document.getElementById("quote-by");

projects.forEach(function(img){
	img.addEventListener("mouseover", function(){
		this.classList.remove("grayScale");
	});
	img.addEventListener("mouseleave",function(){
		this.classList.add("grayScale");
	});
});

function getQuote(){
	let random = quotes[Math.floor(Math.random() * quotes.length)];
	quoteText.innerText = `"${random.quote}".`;
	quoteBy.innerText = `-${random.author}`;
}

window.onload = function(){
	getQuote();
}

