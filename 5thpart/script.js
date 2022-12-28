// Use DOM querySelector to make variables from the individual classes for each button in the HTML
calculatorviewport = document.querySelector(".calculatorviewport");
clear = document.querySelector(".flexbox-item-clear");
equals = document.querySelector(".equals");

addition = document.querySelector(".addition");
subtraction = document.querySelector('.subtraction');
multiplication = document.querySelector('.multiplication');
division = document.querySelector('.division');

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
let x = "0";
let y = "0";
// Create functions for each button saving their value i.e. one = 1 and saving them as x and also displaying them in the calculator display 
//NOTE replaced innerHTML with textcontent.  seems to be normal functionality and maybe improved
var counterr = 0;
function OneBtn(e) {
	if (counterr < 1) {
	e.preventDefault();
	x += one.textContent;
	// POSSIBLE ERROR HERE:  x -= " deletes the leading 0 frm the display" also repeated for numbers 1 thru 5 
	calculatorviewport.textContent = x;	
	} else {
		y += one.textContent;
		calculatorviewport.textContent = y;
		console.log("y value is now " + y);
	};
};
function TwoBtn(e) {
	if (counterr < 1) {
	e.preventDefault();
	x += two.textContent;
	calculatorviewport.textContent = x;	
	} else {
		y += two.textContent;
		calculatorviewport.textContent = y;
		console.log('y is now ' + y);
	}
}
function ThreeBtn(e) {
	if (counterr < 1) {
	e.preventDefault();
	x += three.textContent;
	calculatorviewport.textContent = x;	
	} else {
		y += three.textContent;
		calculatorviewport.textContent = y;
		console.log('y is now ' + y);
	}
}
function FourBtn(e) {
	if (counterr < 1) {
	e.preventDefault();
	x += four.textContent;
	
	calculatorviewport.textContent = x;	
	} else {
		y += four.textContent;
		calculatorviewport.textContent = y;
		console.log('y is now ' + y);
	}
}
function FiveBtn(e) {
	if (counterr < 1) {
	e.preventDefault();
	x += five.textContent;
	
	calculatorviewport.textContent = x;	
	} else {
		y += five.textContent;
		calculatorviewport.textContent = y;
		console.log('y is now ' + y);
	}
}
function SixBtn(e) {
	if (counterr < 1) {
	e.preventDefault();
	x += six.textContent;
	
	calculatorviewport.textContent = x;	
	} else {
		y += six.textContent;
		calculatorviewport.textContent = y;
		console.log('y is now ' + y);
	}
}
function SevenBtn(e) {
	if (counterr < 1) {
	e.preventDefault();
	x += seven.textContent;
	
	calculatorviewport.textContent = x;	
	} else {
		y += seven.textContent;
		calculatorviewport.textContent = y;
		console.log('y is now ' + y);
	}
}
function EightBtn(e) {
	if (counterr < 1) {
	e.preventDefault();
	x += eight.textContent;
	
	calculatorviewport.textContent = x;	
	} else {
		y += eight.textContent;
		
		calculatorviewport.textContent = y;
		console.log('y is now ' + y);
	}
}
function NineBtn(e) {
	if (counterr < 1) {
	e.preventDefault();
	x += nine.textContent;
	
	calculatorviewport.textContent = x;	
	} else {
		y += nine.textContent;
		calculatorviewport.textContent = y;
		console.log('y is now ' + y);
	}
}
function ZeroBtn(e) {
	if (counterr < 1) {
	e.preventDefault();
	x += zero.textContent;
	
	calculatorviewport.textContent = x;	
	} else {
		y += zero.textContent;
		calculatorviewport.textContent = y;
		console.log('y is now ' + y);
	}
}


// clear display Clears the display by resetting it back to 0  note that x is a string
function clearDisplay(e) {
	e.preventDefault();
	calculatorviewport.textContent = "0";
	x = "0";
	y = "0";
	counterr = 0;
	console.log('x is now ' + x);
	console.log('y is now ' + y);
	console.log('counterr is now ' + counterr);
	//declare choice variable for input into equals button
	// equals button will have ultimate function that will do the operation inside based on what the choice variable is when it is clicked on in each one
}
let choice;
//whatttstring variable is used to make logic of stringing operations possible will change behaviour of operation button on the spot the equal button will still work normally
let whatttString;
function addNumbers(e) {
	if (counterr < 1) {
		choice = "changetoAdd";
		e.preventDefault();
		counterr += 1;
		whatttString = "adddString";
		console.log('x is now ' + x);
		console.log(typeof x);
		console.log('y is now ' + y);
		console.log(typeof y);
	} else if (whatttString === "subbbString") {
		x = x - y;
		y = "0";
		whatttString = "adddString";
		e.preventDefault();
		console.log(typeof x);
		console.log(typeof y);
	} else if (whatttString = "adddString") {
		x = x + y;
		y = "0";
	} 
}

function subNumbers(e) {
	if (counterr < 1) {
		choice = "changetoSub";
		e.preventDefault();
		counterr += 1;
		whatttString = "subbbString";
		console.log('x is now ' + x);
		console.log(typeof x);
		console.log('y is now ' + y);
		console.log(typeof y);
	} else if (whatttString === "adddString")  {
		x = x + y;
		y = "0";
		whatttString = "subbbString";
		e.preventDefault();
		console.log(typeof x);
		console.log(typeof y);
	} else if (whatttString === "subbbString") {
		x = x - y;
		y = "0";
	}
}

function multNumbers(e) {
	if (counterr < 1) {
		choice = "changetoMult";
		e.preventDefault();
		counterr += 1;
		whatttString = "multttString";
		console.log('x is now ' + x);
		console.log(typeof x);
		console.log('y is now ' + y);
		console.log(typeof y);
	} else {
		e.preventDefault();
		console.log(typeof x);
		console.log(typeof y);
	}
}

function divNumbers(e) {
	if (counterr < 1) {
		choice = "changetoDiv";
		e.preventDefault();
		counterr += 1;
		whatttString = "divvvString";
		console.log('x is now ' + x);
		console.log(typeof x);
		console.log('y is now ' + y);
		console.log(typeof y);
	} else {
		e.preventDefault();
		console.log(typeof x);
		console.log(typeof y);
	}
}

equals.addEventListener('click', UltimateFunction);

function UltimateFunction() {
	console.log('change to add is ' + choice);
	if (choice === 'changetoAdd') {
		let outcome = x + y;
		calculatorviewport.textContent = outcome;
	} else if (choice === 'changetoSub') {
		let outcome = x -y;
		calculatorviewport.textContent = outcome;
	} else if (choice === 'changetoMult') {
		let outcome = x * y;
		calculatorviewport.textContent = outcome;
	} else if (choice === 'changetoDiv') {
		let outcome = x / y;
		calculatorviewport.textContent = outcome;
	}
}


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
addition.onclick = addNumbers;
subtraction.onclick = subNumbers;
multiplication.onclick = multNumbers;
division.onclick = divNumbers;
console.log(x);

clear.onclick = clearDisplay;