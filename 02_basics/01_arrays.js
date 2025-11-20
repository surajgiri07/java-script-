 // array

const myArr = [0, 1, 2, 3, 4, 5]     // simple array
const myHeors = ["shaktiman", "naagraj"]   // string array

const myArr2 = new Array(1, 2, 3, 4)  // array created using constructor
// console.log(myArr[1]);            // access array element

// Array methods

// myArr.push(6)        // add element at end
// myArr.push(7)        // add element at end
// myArr.pop()          // remove last element

// myArr.unshift(9)     // add element at start
// myArr.shift()        // remove element from start

// console.log(myArr.includes(9));   // check value exists or not
// console.log(myArr.indexOf(3));    // find index of value

// const newArr = myArr.join()       // convert array to string

// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);           // original array

const myn1 = myArr.slice(1, 3)      // slice: copy part, does not change original

console.log(myn1);
console.log("B ", myArr);           // original remains same

const myn2 = myArr.splice(1, 3)     // splice: removes part, changes original

console.log("C ", myArr);           // array changed
console.log(myn2);                  // removed elements
