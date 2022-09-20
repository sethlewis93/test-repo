// Add values to the end of an array

// let array = [1, 4, 3];
// array[array.length] = [10, 9, 8];

// console.log(array);
//[ 1, 4, 3, [ 10, 9, 8 ] ]

/** <--------------------------------------------------------------------> */

// // Set content of an array to a constant values
// const myArr = Object.freeze([1, 2, 3]);
// myArr[1] = 4;
// console.log(myArr); // previous line doesn't change anything

// // set content of nested array elements to constant values
// const myNestedArr = Object.freeze([1, 2, 3, Object.freeze([4, 5, 6])]);
// myNestedArr[3][0] = 9;
// console.log(myNestedArr); // previous line has no affect

/** <--------------------------------------------------------------------> */

// .push() adds to end of the array and returns the length of the array (NOT the new array)
// .push() mutates the caller
//array.push('a')
// 5               // the new length of the array

//array
// [ 1, 4, 3, 10, 'a' ]

// array.push(null, 'xyz')
// 7

//array
// [ 1, 4, 3, 10, 'a', null, 'xyz' ]

/** <--------------------------------------------------------------------> */

// .concat() adds new elements to the end of an array and returns the array itself
// .concat() does not mutate the caller

const array = [1, 4, 3, 10, "a", null, "xyz"];
// const concatArr = array.concat("blue", 52, "green", 42);
// console.log(array);
// console.log(concatArr);
// array.push("BLUE-52");
// console.log(array);

/** <--------------------------------------------------------------------> */

// .pop() removes and returns the last element of the array
// .pop mutates the caller
array.pop();
console.log(array);

/** <--------------------------------------------------------------------> */

// .splice() removes one or more elements from the array
// .splice() mutates the caller
array.splice(3, 2); // should return [1, 4, 3, null]
console.log(array);

/** <--------------------------------------------------------------------> */
