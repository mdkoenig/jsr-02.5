//var creditCardNumber = prompt("Please enter your credit card number.");

//var creditCardNumber = "1234567890123456";

var creditCardNumber = prompt("What is your credit card number, please?");

var creditArray = creditCardNumber.split("");

creditArray = creditArray.reverse();

var sum = 0;

for(i=0;i<creditArray.length;i++)
{
	creditArray[i] = parseInt(creditArray[i],10);
	if(i%2===1)
	{
		if(creditArray[i]*2>9)
		{
			creditArray[i] = annoyingNumbers(creditArray[i]*2);
		}
		else
		{
			creditArray[i] = creditArray[i]*2;
		}
	}
	sum = sum + creditArray[i];
}

if(sum%10===0)
{
	console.log("This is a valid credit card.");
}
else
{
	console.log("I'm sorry, this is not a valid card.")
}
//console.log(creditArray);
//console.log("Sum: " + sum);

function annoyingNumbers(number)
{
//	console.log("Annoying: " + number);
	var string = number.toString();
	stringArray = string.split("");
//	console.log(stringArray);
	return (parseInt(stringArray[0],10) + parseInt(stringArray[1],10));
}