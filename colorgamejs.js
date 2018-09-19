var numSq = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
	setModeBtn();
	setSquares();
	reset();
}

function setModeBtn(){
	for (var i = 0; i < modeBtn.length; i++) {
		modeBtn[i].addEventListener("click", function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSq = 3 : numSq = 6;
			reset();
		});
	}
}

function setSquares(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function(){
			//grab color of picked square
			var clickedColor = this.style.backgroundColor;
			//compare color
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!!!"
			}
		});
	}
}

function reset(){
	//generate random colors
	colors = generateRandColors(numSq);
	//pick new color
	pickedColor = pickColor();
	//change colors of squares and change color display
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = ""
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColor(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random numbers and push it in array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick r, g, b from 0 - 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
