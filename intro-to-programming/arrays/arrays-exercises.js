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

//Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

let arr = ["a", "abcd", "abcde", "abc", "ab"];

function oddLengths(arr) {
  let strings = arr.map((els) => els.length);
  let odds = strings.filter((num) => num % 2 === 1);
  return odds;
}
// console.log(oddLengths(arr)); // => [1, 5, 3]

/** <--------------------------------------------------------------------> */

// Use reduce to compute the sum of all squares in the array.

let array = [3, 5, 7];

const sumOfSquares = function (arr) {
  return arr.reduce((acc, el) => acc + el * el, 0);
};

// console.log(sumOfSquares(array)); // => 83

/** <--------------------------------------------------------------------> */

// Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

let arrEight = ["a", "abcd", "abcde", "abc", "ab"];

const oddLengths2 = function (arr) {
  return arr.reduce((filteredLettersArray, letters) => {
    // store the length of each element in the array
    letters = letters.length;
    // push the lenghts to the accumulator array
    if (letters % 2 === 1) {
      filteredLettersArray.push(letters);
    }
    return filteredLettersArray;
  }, []);
};

// console.log(oddLengths2(arrEight)); // => [1, 5, 3]

/** <--------------------------------------------------------------------> */

// Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

// function magicNumber(arr) {
//   return arr.reduce((prevElement, currentElement) => {
//     const isThree = prevElement[currentElement] === 3 ? true : false;
//     return isThree;
//   }, []);
// }

function magicNumber(arr) {
  return arr.includes(3) ? true : false;
}

// console.log(magicNumber(numbers1));
// console.log(magicNumber(numbers2));
// console.log(magicNumber(numbers3));

/** <--------------------------------------------------------------------> */

// Write some code to replace the value 6 in the following array with 606:
// You don't have to search the array. Just write an assignment that replaces the 6.

let replaceSix = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12],
];

replaceSix[1][3] = 606;
console.log(replaceSix);
