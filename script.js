let num1 = parseInt(prompt("Enter first number"));
let num2 = parseInt(prompt("Enter second number"));
let operator = prompt("Enter an operator from this list (+,-,*,/)");

if (operator == "+") {
  alert("The answer is" + " " + num1 + num2);
} else if (operator == "-") {
  alert("The answer is" + " " + (num1 - num2));
} else if (operator == "*") {
  alert("The answer is" + " " + num1 * num2);
} else if (operator == "/") {
  alert("The answer is" + " " + num1 / num2);
} else {
  alert("You have entered an invalid operator.Please try again");
}
