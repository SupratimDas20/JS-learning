// Declaring variables using "var" (older approach).
var myName = "John";
console.log(myName);

// Declaring variables using "let" [modern approach] variables declared using let their values can be changes in the future.
let age = 26;
console.log(age);

// Declaring variables using "const" the value of the variable decelared using const cannot be changes in the future
const isStudent = true;
console.log(isStudent);

isStudent = false;
console.log(isStudent);

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

// Operators
// Arithmetic
let a = 10;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Comparison
let c = 45;
let d = "45";
console.log(c == d);
console.log(c === d);
let e = 3;
let f = 9;
console.log(e != f);
console.log(e > f);
console.log(e < f);

//loose and strict
console.log(5 == "5");
console.log(0 == false);

console.log(5 === "5");
console.log(5 === 5);

//Logical Operator
let age1 = 20;
let hasTicket = true;
let IsLoggedIn = false;
console.log(age1 > 18 && hasTicket); //AND:&&
console.log(age1 > 25 || hasTicket); //OR:||
console.log(!IsLoggedIn); //NOT:!

//Assignment

let score = 0;
score += 10;
console.log(score);
score += 5;
console.log(score);
score -= 3;
console.log(score);
score *= 2;
console.log(score);
score /= 2;
console.log(score);
score %= 5;
console.log(score);

Lock

//Control Flow
//If//Else//Switch
// Loops