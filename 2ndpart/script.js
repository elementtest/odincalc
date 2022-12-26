//turn buttons into variables
calculatorviewport = document.querySelector(".calculatorviewport");
clear = document.querySelector(".flexbox-item-clear");
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
function OneBtn(e) {
	e.preventDefault();
	x += one.innerHTML;
	calculatorviewport.innerHTML = x;	
}
function TwoBtn(e) {
	e.preventDefault();
	x += two.innerHTML;
	calculatorviewport.innerHTML = x;	
}
function ThreeBtn(e) {
	e.preventDefault();
	x += three.innerHTML;
	calculatorviewport.innerHTML = x;	
}
function FourBtn(e) {
	e.preventDefault();
	x += four.innerHTML;
	calculatorviewport.innerHTML = x;	
}
function FiveBtn(e) {
	e.preventDefault();
	x += five.innerHTML;
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





function clearDisplay(e) {
	e.preventDefault();
	calculatorviewport.innerHTML = "0";
	x = "0";

}

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