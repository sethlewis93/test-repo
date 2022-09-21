const returnFactorial = function (num) {
  let result = 1;
  for (let i = num; i > 0; i -= 1) {
    result *= i;
  }

  return result;
};

console.log(returnFactorial(1)); // => 1
console.log(returnFactorial(2)); // => 2
console.log(returnFactorial(3)); // => 6
console.log(returnFactorial(4)); // => 24
console.log(returnFactorial(5)); // => 120
console.log(returnFactorial(6)); // => 720
console.log(returnFactorial(7)); // => 5040
console.log(returnFactorial(8)); // => 40320
