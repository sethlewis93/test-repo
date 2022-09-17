// Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string.

// Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.

const upperCaseString = function (str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
};

console.log(upperCaseString("gogogadgetflow"));
console.log(upperCaseString("go"));

// Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

const numberRange = function (num) {};

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
