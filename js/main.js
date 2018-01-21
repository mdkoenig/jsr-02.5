// var creditCardNumber = prompt("What is your credit card number, please?");

document.getElementById("formSubmit").onclick = getCard;
document.getElementById("reset").onclick = reset;

function getCard()
{
	var creditCardNumber = document.getElementById("creditCard").value;
	validate(creditCardNumber);
	return false;
}

function validate(creditCardNumber)
{
	if(creditCardNumber === "") {
		response(false);
	} else {
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
			response(true);
			//console.log("This is a valid credit card.");
		} else {
			response(false);
			//console.log("I'm sorry, this is not a valid card.")
		}
	}
}
	
function annoyingNumbers(number) {
	var numberString = number.toString();
	var stringArray = numberString.split("");
	return (parseInt(stringArray[0],10) + parseInt(stringArray[1],10));
}

function response(valid)
{
	if(valid === true) {
		document.getElementById("response").innerHTML = "Congrats, your card is valid.";
	} else {
		document.getElementById("response").innerHTML = "I'm sorry, this is not a valid credit card.";
	}
}

function reset()
{
	document.getElementById("response").innerHTML = "";
	document.getElementById("creditCard").value = "";
}