// .forEach() invokes a callback once for each element, passing it's elements values as an argument
// .forEach() always returns 'undefined'
let array = [1, 2, 3];
// array.forEach((el) => console.log(el * 2));

/** <--------------------------------------------------------------------> */

// .map() transforms an array's elements and returns a new array  with the transformed values
let myArr = [2, 4, 6];
let squares = myArr.map((num) => num * num);
// console.log(squares);

/** <--------------------------------------------------------------------> */

// .filter() returns a new array with the values that the method's callback evaluated to a truthy value
// .filter() does not mutate the caller

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2];
let greaterThan = numbers.filter((num) => num > 4);
// console.log(greaterThan);

/** <--------------------------------------------------------------------> */

/**
 * .reduce() effectively condenses (reduces) the elements of an array into a single value
 *
 * .reduce() takes two arguments: a callback function and a value that initializing something called "accumulator"
 *
 * In its simplest form, the callback function takes two arguments: the current value of the accumulator and an element from the array. It returns a value that will be used as the accumulator in the next invocation of the callback.
 */

let newArr = [2, 3, 5, 7];

// compute the sum of array elements
let arrSum = newArr.reduce((acc, el) => acc + el, 0);
// console.log(arrSum);

//compute product of array elemets
let arrProd = newArr.reduce((acc, el) => acc * el, 1);
// console.log(arrProd);

let strings = ["a", "b", "c", "d"];

// return a string with each element upper-cased
let newStrings = strings.reduce((acc, el) => acc + el.toUpperCase(), "");
// console.log(newStrings);

/** <--------------------------------------------------------------------> */

// .slice([arg1], [arg2]) extracts and returns a portion of the array
// contrasted with .splice() which removes selected elements and returns the mutated array
// omitting the second arg extracts all elements from the first arg's index onward (inclusive)
// omitting all args returns a copy of the array which is useful for deconstructing an array that you don't want to modify

let fruits = ["mango", "orange", "banana", "pear", "apple"];
console.log(fruits.slice(1, 3)); // returns 'orange', 'banana'
console.log(fruits.slice(2)); // returns banana, pear, apple
