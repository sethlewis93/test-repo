function returnFactorial(num) {
  let result = 1;

  console.log(result);

  if (num > 0) {
    returnFactorial((num *= result));
    num -= 1;
  }

  return result;
}

returnFactorial(1);
returnFactorial(2);
returnFactorial(6);

// console.log(returnFactorial(1)); // => 1
// console.log(returnFactorial(2)); // => 2
// console.log(returnFactorial(3)); // => 6
// console.log(returnFactorial(4)); // => 24
// console.log(returnFactorial(5)); // => 120
// console.log(returnFactorial(6)); // => 720
// console.log(returnFactorial(7)); // => 5040
// console.log(returnFactorial(8)); // => 40320
