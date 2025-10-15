// Declaring a variable 'name' and storing a string "suraj"
const name = "suraj"

// Declaring a variable 'repoCount' and storing a number 50
const repoCount = 50

// This combines the variables and prints as a string
// + operator joins strings and numbers (numbers are converted to string)
console.log(name + repoCount + " Value"); // Output: suraj50 Value

// Using template literals (backticks) to insert variables directly in a string
// ${variable} is used to insert the value of the variable inside the string
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
// Output: Hello my name is suraj and my repo count is 50

// Creating a new string object using the String constructor
const gameName = new String('suraj-hc-com')

// Accessing first character of the string (0 is first index)
console.log(gameName[0]); // Output: s

// Checking the prototype of string object (all string methods come from here)
console.log(gameName.__proto__);

// Finding the length of the string
console.log(gameName.length); // Output: 13

// Converting string to uppercase
console.log(gameName.toUpperCase()); // Output: SURAJ-HC-COM

// Getting character at index 2 (count starts from 0)
console.log(gameName.charAt(2)); // Output: r

// Finding the index of first occurrence of 'r'
console.log(gameName.indexOf('r')); // Output: 2

// Extracting part of string from index 0 to 4 (4 not included)
const newString = gameName.substring(0, 4)
console.log(newString); // Output: sura

// slice(start, end) works like substring but allows negative index
// Negative index starts counting from end of string
const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // Output: "" (empty string, because start is after end)

// String with extra spaces
const newStringOne = "   suraj    "
console.log(newStringOne); // Output: "   suraj    "

// trim() removes spaces from both sides of string
console.log(newStringOne.trim()); // Output: "suraj"

// URL string
const url = "https://suraj.com/suraj%20choudhary"

// replace(old, new) replaces first occurrence of old substring with new substring
console.log(url.replace('%20', '-')); // Output: https://suraj.com/suraj-choudhary

// includes(substring) checks if string contains substring, returns true/false
console.log(url.includes('sundar')); // Output: false

// split(separator) splits string into array of substrings using separator
console.log(gameName.split('-')); // Output: ['suraj', 'hc', 'com']
