// Use DOM querySelector to make variables from the individual classes for each button in the HTML
calculatorviewport = document.querySelector(".calculatorviewport");
clear = document.querySelector(".flexbox-item-clear");
equals = document.querySelector(".flexbox-item-equals");
one = document.querySelector(".flexbox-item-1");
two = document.querySelector(".flexbox-item-2");
three = document.querySelector(".flexbox-item-3");
four = document.querySelector(".flexbox-item-4");
five = document.querySelector(".flexbox-item-5");
six = document.querySelector(".flexbox-item-6");
seven = document.querySelector(".flexbox-item-7");
eight = document.querySelector(".flexbox-item-8");
nine = document.querySelector(".flexbox-item-9");
zero = document.querySelector(".flexbox-item-zero");
x = "0";

// Create functions for each button saving their value i.e. one = 1 and saving them as x and also displaying them in the calculator display 
function OneBtn(e) {
	e.preventDefault();
	x += one.innerHTML;
	x -= "";
	calculatorviewport.innerHTML = x;	
}
function TwoBtn(e) {
	e.preventDefault();
	x += two.innerHTML;
	x -= "";
	calculatorviewport.innerHTML = x;	
}
function ThreeBtn(e) {
	e.preventDefault();
	x += three.innerHTML;
	x -= "";
	calculatorviewport.innerHTML = x;	
}
function FourBtn(e) {
	e.preventDefault();
	x += four.innerHTML;
	x -= "";
	calculatorviewport.innerHTML = x;	
}
function FiveBtn(e) {
	e.preventDefault();
	x += five.innerHTML;
	x -= "";
	calculatorviewport.innerHTML = x;	
}
function SixBtn(e) {
	e.preventDefault();
	x += six.innerHTML;
	calculatorviewport.innerHTML = x;	
}
function SevenBtn(e) {
	e.preventDefault();
	x += seven.innerHTML;
	calculatorviewport.innerHTML = x;	
}
function EightBtn(e) {
	e.preventDefault();
	x += eight.innerHTML;
	calculatorviewport.innerHTML = x;	
}
function NineBtn(e) {
	e.preventDefault();
	x += nine.innerHTML;
	calculatorviewport.innerHTML = x;	
}
function ZeroBtn(e) {
	e.preventDefault();
	x += zero.innerHTML;
	calculatorviewport.innerHTML = x;	
}



// clear display Clears the display by resetting it back to 0  note that x is a string

function clearDisplay(e) {
	e.preventDefault();
	calculatorviewport.innerHTML = "0";
	x = "0";

}

console.log(equals);

// onclick event listeners for each div element defined above
// each onclick listener links to a function above changing the display

one.onclick = OneBtn;
two.onclick = TwoBtn;
three.onclick = ThreeBtn;
four.onclick = FourBtn;
five.onclick = FiveBtn;
six.onclick = SixBtn;
seven.onclick = SevenBtn;
eight.onclick = EightBtn;
nine.onclick = NineBtn;
zero.onclick = ZeroBtn;
console.log(x);

clear.onclick = clearDisplay;