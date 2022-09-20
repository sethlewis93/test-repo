function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let result;
let tries = 0;

do {
  // While the return value of the random num function invocation is less than "2", increment tries variable
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log(
  "It took " + String(tries) + " tries to get a number greater than 2"
);
