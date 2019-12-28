// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)",
// ];
var numSquares = 6;
var colors = generateRandomColors(6);


var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay =  document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");





easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickcolor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickcolor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
  		
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
});
		



colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickcolor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "new colors";
	// change colors of square
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

for(var i = 0; i < squares.length; i++){
	// add initial color to squares
	squares[i].style.backgroundColor = colors[i];
	// add event listeners to all square
	squares[i].addEventListener("click", function(){
		// grab color of picked square
		var clickedColor = this.style.backgroundColor;
		// compare with picked color
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changedColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play again?";
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});

}

function changedColors(color){
	// loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
		var arr = [];
	// repeat num times
	for(var i = 0; i < num; i++){
		// get random colors and push into array
		arr.push(randomColor());
		
	}
	// return array
	return arr;
}

function randomColor(){
	// pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}