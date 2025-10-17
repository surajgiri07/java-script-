const balance = new Number(200);
console.log(balance);

console.log(balance.toString().length); // Converts number to string and shows its length
console.log(balance.toFixed(1)); // Rounds to one decimal place

const value = 777.5098;
console.log(value.toPrecision(3)); // Shows number with 3 significant digits

// =================== MATHS ================== //

// console.log(Math.abs(-9));    // Converts negative to positive
// console.log(Math.round(7.7)); // Rounds to nearest integer
// console.log(Math.ceil(7.7));  // Rounds up
// console.log(Math.floor(7.7)); // Rounds down
// console.log(Math.min(7,8,9,5)); // Finds smallest value
// console.log(Math.max(7,8,9,5)); // Finds largest value

console.log(Math.random()); // Generates random number between 0 and 1

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random integer between min and max
