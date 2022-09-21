let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// myArray.forEach(function (num) {
//   if (num % 2 !== 0) {
//     return;
//   }

//   console.log(num);
// });

// myArray.forEach(function (arr) {
//   arr.forEach(function (num) {
//     if (num % 2 !== 0) {
//       return;
//     }

//     console.log(num);
//   });
// });

let output = myArray.map((el) => {
  if (el % 2 !== 0) return "odd";
  return "even";
});

// console.log(output);

let things = [1, "a", "1", 3, NaN, 3.1415, -4, null, false];

const findIntegers = function (arr) {
  return arr.filter((el) => {
    return Number.isInteger(el);
  });
};

let integers = findIntegers(things);

// console.log(integers); // => [1, 3, -4]

// let arr = ["a", "abcd", "abcde", "abc", "ab"];

// const oddLengths = (arr) => {
//   let stringLengths = arr.map((el) => el.length);
//   let oddLengths = stringLengths.filter((el) => el % 2 === 1);
//   return oddLengths;
// };

// console.log(oddLengths(arr)); // => [1, 5, 3]

let array = [3, 5, 7];

const sumOfSquares = (arr) => {
  return arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue * currentValue;
  }, 0);
};

// console.log(sumOfSquares(array)); // => 83

// let arr = ["a", "abcd", "abcde", "abc", "ab"];

const oddLengths = (arr) => {
  // check that getting the array elements with reduce
  return arr.reduce((filteredArr, letter) => {
    let letters = letter.length;
    if (letters % 2 === 1) {
      filteredArr.push(letters);
    }
    return filteredArr;
  }, []);
};

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12],
];

arr[1][3] = 606;
console.log(arr);
