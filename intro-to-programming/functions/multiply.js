/*
    $ node multiply.js
    Enter the first number: 3.141592653589793
    Enter the second number: 2.718281828459045
    3.141592653589793 * 2.718281828459045 = 8.539734222673566
*/

function getNum(prompt) {
  const readline = require("readline-sync");
  let number = readline.question(prompt);
  return number;
}

function result(first, second) {
  return first * second;
}

let firstNum = getNum("Enter the first number: ");
let secondNum = getNum("Enter the second numner: ");

console.log(`${firstNum} * ${secondNum} = ${result(firstNum, secondNum)}`);
