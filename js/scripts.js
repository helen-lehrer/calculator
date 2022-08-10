//business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

//user interface logic
const numberOne = parseInt(prompt("Enter a number:"));

const numberTwo = parseInt(prompt("Enter another number:"));

window.alert(numberOne + " + " + numberTwo + " = " + add(numberOne, numberTwo) + ", " + numberOne + " - " + numberTwo + " = " + subtract(numberOne, numberTwo) + ", " + numberOne + " * " + numberTwo + " = " + multiply(numberOne, numberTwo) + ", " + numberOne + " / " + numberTwo + " = " + divide(numberOne, numberTwo) + ".");