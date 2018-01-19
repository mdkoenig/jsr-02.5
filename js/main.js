var creditCardNumber = prompt("What is your credit card number, please?");

var creditArray = creditCardNumber.split("");

creditArray = creditArray.reverse();

var sum = 0;

for(var i = 0; i < creditArray.length; i++) {
	creditArray[i] = parseInt(creditArray[i],10);
	if(i % 2 === 1) {
		if(creditArray[i]*2 > 9){
			creditArray[i] = annoyingNumbers(creditArray[i]*2);
		} else {
			creditArray[i] = creditArray[i]*2;
		}
	}
	sum = sum + creditArray[i];
}

if(sum % 10 === 0) {
	console.log("This is a valid credit card.");
} else {
	console.log("I'm sorry, this is not a valid card.")
}

function annoyingNumbers(number) {
	var numberString = number.toString();
	var stringArray = numberString.split("");
	return (parseInt(stringArray[0],10) + parseInt(stringArray[1],10));
}