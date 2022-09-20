// log all even numbers to the console

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
myArray.forEach((num) => {
  if (num % 2 === 0) {
    // console.log(num);
  }
});

/** <--------------------------------------------------------------------> */

let myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// myArray2.reduce((acc, num) => {
//   console.log(acc, num[0]);
// }, 0);

/** <--------------------------------------------------------------------> */

let myArray3 = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// return an array where each element corresponds to the original array with "odd" if the number is odd or "even" if not

let oddEvenArr = myArray3.map((el) => {
  if (el % 2 === 0) {
    return "even";
  }
  return "odd";
});

// console.log(oddEvenArr);

/** <--------------------------------------------------------------------> */

// Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array.
let things = [1, "a", "1", 3, NaN, 3.1415, -4, null, false];

function findIntegers(arr) {
  return arr.filter((el) => {
    return Number.isInteger(el);
  });
}

let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]

/** <--------------------------------------------------------------------> */

let arr = ["a", "abcd", "abcde", "abc", "ab"];

function oddLengths(arr) {
  arr.map((el) => {});
}

console.log(oddLengths(arr)); // => [1, 5, 3]
