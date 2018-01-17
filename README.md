# jsr-02.5

## Challenge: Validating Credit Card Numbers

Credit card numbers can be validated with a process called the Luhn algorithm. Simply stated, the Luhn algorithm works like this:

1. Starting with the next to last digit and continuing with every other digit going back to the beginning of the card, double the digit.

2. Sum all doubled and untouched digits in the number.

3. If that total is a multiple of 10, the number is valid.

For example, given the card number 4408 0412 3456 7893:

```
Orig  :  4 4 0 8 0 4 1 2 3 4   5 6   7 8   9 3
Step 1:  8 4 0 8 0 4 2 2 6 4  10 6  14 8  18 3
Step 2:  8+4+0+8+0+4+2+2+6+4+1+0+6+1+4+8+1+8+3 = 70
Step 3:  70 % 10 == 0
```

### To Do

Prompt in JS for a credit card number. Create a variable `creditCardNumber` equal to the entered value, and manipulate the DOM to enter a new DOM node printing both the number entered and the validity of the number. Optional: construct a form that does the same thing and use jQuery to execute the pieces.

For your reference:
* 1234567890123456 is not valid
* 4408041234567893 is valid
* 38520000023237 is valid
* 4222222222222 is valid

### Bonus

* For 16 digit credit card numbers, how many possible combinations exist that satisfy the luhn algorithm?

### Appendix

Reference: http://en.wikipedia.org/wiki/Luhn_algorithm

Source: http://www.rubeque.com/problems/validating-credit-card-numbers