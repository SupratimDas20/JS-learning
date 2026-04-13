// Declaring variables using "var" (older approach).
var myName = "John";
console.log(myName);

// Declaring variables using "let" [modern approach] variables declared using let their values can be changes in the future.
let age = 26;
console.log(age);

// Declaring variables using "const" the value of the variable decelared using const cannot be changes in the future
const isStudent = true;
console.log(isStudent);

// isStudent=false;
// console.log(isStudent);

// Primitive datatypes
// String 
let message = "Hello, World!";
console.log(message);
let address = '123, Main St';
console.log(address);

// Numbers
let count = 10;
console.log(count);
let price = 19.192;
console.log(price);
let pi = 3.14159;
console.log(pi);

// Boolean
let isLoggedIn = true;
console.log(isLoggedIn);
let hasPermission = false;
console.log(hasPermission);

//Null
let sameValue = null;
console.log(sameValue);

// Unefined
let currentScore;
console.log(currentScore);

// This works fine:
let temperature = 25;
console.log(temperature);
temperature = 30; // Reassignment is ok for "let"
console.log(temperature);

// This will throw an error
const birthYear = 1969;
console.log(birthYear);
birthYear = 1995;//Error: Assignment to constant variable
console.log(birthYear);

