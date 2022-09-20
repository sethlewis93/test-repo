// 5 -> 5 * 4 * 3 * 2 * 1

function factorial(number) {
  // set our stop condition
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(5));
