let obj = {
  b: 2,
  a: 1,
  c: 3,
};

function upperCaseKeys(obj) {
  let keys = Object.keys(obj);
  let keysArr = keys.map((key) => key.toUpperCase());
  return keysArr;
}

// console.log(upperCaseKeys(obj));

/** <--------------------------------------------------------------------> */

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.fiz = 3;
// console.log(myObj);

/** <--------------------------------------------------------------------> */

// Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

//The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all of the existing keys from the object.

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(obj, keys) {
  let newObj = {};

  if (keys) {
    keys.forEach((key) => {
      newObj[key] = obj[key];
    });
  } else {
    Object.assign(newObj, obj);
  }

  return newObj;
}

let newObj = copyObj(objToCopy);
console.log(newObj); // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, ["foo", "qux"]);
console.log(newObj2); // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, ["bar"]);
console.log(newObj3); // => { bar: 2 }
