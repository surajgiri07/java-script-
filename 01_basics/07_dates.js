// Dates

let myDate = new Date();
// console.log(myDate.toString());        // Full date and time
// console.log(myDate.toDateString());    // Only date part
// console.log(myDate.toLocaleString());  // Date and time based on locale
// console.log(typeof myDate);            // Object type

// Different ways to create a specific date
// let myCreatedDate = new Date(2023, 0, 23);         // Month starts from 0 (Jan)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);   // With hours and minutes
// let myCreatedDate = new Date("2023-01-14");        // yyyy-mm-dd format
let myCreatedDate = new Date("01-14-2023");          // mm-dd-yyyy format
// console.log(myCreatedDate.toLocaleString());       // Local formatted date

let myTimeStamp = Date.now(); // Current time in milliseconds

// console.log(myTimeStamp);                     // Milliseconds since Jan 1, 1970
// console.log(myCreatedDate.getTime());         // Milliseconds for created date
// console.log(Math.floor(Date.now() / 1000));   // Current time in seconds

let newDate = new Date();
console.log(newDate);              // Current date and time
console.log(newDate.getMonth() + 1); // Month (1 added because months start from 0)
console.log(newDate.getDay());       // Day of week (0–6)

// Format date with weekday name
newDate.toLocaleString('default', {
    weekday: "long",
});

