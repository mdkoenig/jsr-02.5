//var creditCardNumber = prompt("Please enter your credit card number.");

var creditCardNumber = "4408041234567893";

console.log("Length: " + creditCardNumber.length);

var creditArray = creditCardNumber.split("");

var sum = 0
console.log(creditArray);

for(i=0;i<creditArray.length;i++)
{
	//var x = creditArray[i];
	//console.log("I: " + i + " And array is: " + x + " And sum start: " + sum);
	creditArray[i] = parseInt(creditArray[i],10);
	//console.log(typeof(creditArray[i]));
	if(i%2===0)
	{
		creditArray[i] = creditArray[i]*2;
		if(creditArray[i]>9)
		{
			creditArray[i] = annoyingNumbers(creditArray[i])
		}
	}
	sum = sum + creditArray[i];
	console.log("Sum: " + sum);
	//console.log("I: " + i + " End sum is: " + sum);
}

console.log("Sum:" + sum);

if(sum%10===0)
{
	console.log("Valid credit card!");
}
else
{
	console.log("Sadly, an invalid card.");
}

function annoyingNumbers(number)
{
	var string = number.toString()
	var x = string.split("");
	var y = 0;
	for(i=0;i<x.lenth;i++)
	{
		y = parseInt(x[i])+y;
	}
	return y;
}