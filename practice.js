/**
 * DETECTIVE'S CASE NOTEBOOK
 * Topic: Strings, Variables, Arrays, Objects, Operators & Functions
 * 
 * WHY THIS MATTERS:
 * Imagine you're a detective at a crime scene. You collect clues (strings), record suspect
 * details (variables), organize evidence chronologically (arrays), store structured information
 * (objects), compare facts to truth (operators), and perform deductions (functions). This file
 * mirrors real investigation work—the foundation of how programs think, organize, and make decisions.
 */

// ═════════════════════════════════════════════════════════════════════════════════════
// SECTION 1 — Initial Evidence: Recording Your First Clues
// WHY: Before you solve a mystery, you must record what you observe. Variables store facts
//      that your program needs to remember. Each fact is a piece of evidence.
// ═════════════════════════════════════════════════════════════════════════════════════

// STORY: You are a detective at a crime scene. Your notebook is your JavaScript program.
// As you walk through the room, you jot down clues (const), suspect info (let), and 
// procedural notes (var). Each piece of information helps you build the full picture.

const clue1 = "Muddy footprint near the window";
const clue2 = "Broken glass on the table";
console.log("Clue Found", clue1); // Output: Clue Found Muddy footprint near the window
console.log("Clue Found", clue2); // Output: Clue Found Broken glass on the table

// const declares a CONSTANT—data that won't change during the investigation.
// In a real detective case, once you document a clue, it's locked in evidence.


// ═════════════════════════════════════════════════════════════════════════════════════
// SECTION 2 — Documenting the Suspect: Gathering details with different variable types
// WHY: Not all facts are constants. Some info changes, some doesn't. JavaScript offers
//      const, let, and var so you can signal your intent—"This fact is fixed" or "This may change."
// ═════════════════════════════════════════════════════════════════════════════════════

// Using const for suspect's identifying information
const suspectName = "HeroAlam";
const suspectAge = 200; // Unlikely suspect—possibly magical creature involved!
console.log("Suspect:", suspectName, "| Age", suspectAge); // Output: Suspect: HeroAlam | Age 200

// Communicating findings—use console.warn() for red flags, console.error() for critical leads
console.warn("Warning: Fingerprint evidence detected"); // Output: Warning: Fingerprint evidence detected
console.error("Warning: Fingerprint evidence detected"); // Output: Warning: Fingerprint evidence detected

// Using let for data that CHANGES as you investigate further
let city = "Delhi"; // Location where suspect was last seen
var age = 24; // Years of criminal activity (var: old style, works but not recommended)
// NOTE: var has confusing scope rules. Prefer let for variables that change.

let heroName = "Shaktiman"; // Alias or code name suspect uses
// BEST PRACTICE: Declare all variables at the top with either const or let, not scattered.

// Using const for fixed investigative notes
const address = "andjjf"; // Old address from prior case file
let air = "pollution"; // Environmental notes from crime scene

// Log all variables to compare details
console.log(city); // Output: Delhi
console.log(age); // Output: 24
console.log(heroName); // Output: Shaktiman
console.log(address); // Output: andjjf
console.log(air); // Output: pollution


// ═════════════════════════════════════════════════════════════════════════════════════
// SECTION 3 — The Evidence Log: Organizing facts with Arrays and Objects
// WHY: A single clue is useful. But ORGANIZED clues—with timestamps, locations, and details—
//      solve cases. This is why arrays and objects exist: to structure chaos into meaning.
// ═════════════════════════════════════════════════════════════════════════════════════

// An array of objects: each piece of evidence is a data object with id, item, and location
const evidenceLog = [
    {
        id: 1,
        item: "Muddy Footprint",
        location: "Window Still"
    },
    {
        id: 2,
        item: "Broken Glass",
        location: "Living Room"
    },
    {
        id: 3,
        item: "Red fiber Strand",
        location: "Door handle"
    }
];

console.log(evidenceLog); // Output: [array with 3 objects, each containing id, item, location]
// NOTE: console.log prints the entire array structure. Hard to read in raw form.

console.table(evidenceLog); // Output: [formatted table in console showing all properties clearly]
// BEST PRACTICE: Use console.table() when debugging arrays of objects.
// It automatically formats your data into readable rows and columns.


// ═════════════════════════════════════════════════════════════════════════════════════
// SECTION 4 — Calculating Patterns: Using Math Operators to Analyze Evidence
// WHY: Evidence is silent. Numbers tell stories—weapon velocity, time gaps, distance patterns.
//      Math operators let you ask: "What does the evidence suggest?"
// ═════════════════════════════════════════════════════════════════════════════════════

let a = 10; // Could represent: hours since crime, distance in km, number of evidence photos
let b = 3;  // Could represent: suspects involved, witness statements, days passed

console.log(a + b); // Output: 13  (Addition: combine two facts)
console.log(a - b); // Output: 7   (Subtraction: find the difference)
console.log(a * b); // Output: 30  (Multiplication: calculate totals)
console.log(a / b); // Output: 3.3333... (Division: find the rate or average)
console.log(a % b); // Output: 1   (Modulo: find remainder—reveals patterns)

// REAL-WORLD INSIGHT: Modulo (%) finds REMAINDERS. Surprisingly useful!
// Example: If you have 10 evidence items to store in 3 drawers, 10 % 3 = 1 
// (one item doesn't fit evenly—reveals something off about the count)


// ═════════════════════════════════════════════════════════════════════════════════════
// SECTION 5 — Truth vs. Loose Truth: Understanding == vs ===
// WHY: A damp shoe print LOOKS like muddy evidence (==), but is it ACTUALLY their shoe (===)?
//      Loose equality (==) converts types. Strict equality (===) never lies.
// ═════════════════════════════════════════════════════════════════════════════════════

// LOOSE EQUALITY (==): Compares value, converts types if needed. DANGEROUS!
console.log(5 == '5');    // Output: true   ⚠️ WARNING: String '5' becomes number 5 silently
console.log(0 == false);  // Output: true   ⚠️ WARNING: false becomes 0 silently
// These FEEL true but they're unreliable. Your logic can break in unexpected ways.

// STRICT EQUALITY (===): Compares value AND type. Never converts. TRUSTWORTHY!
console.log(5 === '5');   // Output: false  ✓ CORRECT: Number 5 ≠ String '5' (different types)
console.log(5 === 5);     // Output: true   ✓ CORRECT: Same value, same type

// RULE FOR DETECTIVES: Always use === in your code. == creates silent bugs.
// In a murder case, you need EXACT matches, not assumptions.


// ═════════════════════════════════════════════════════════════════════════════════════
// SECTION 6 — The Witness List: Arrays and Accessing by Index
// WHY: A list of witnesses is only useful if you can retrieve any name instantly.
//      Arrays let you store multiple items and access them by position (index).
// ═════════════════════════════════════════════════════════════════════════════════════

// STORAGE: fruits array holds 5 items
// INDEXING: Start counting from 0, not 1! This trips up every beginner.
let fruits = ["Apple", "Mango", "Banana", "Grapes", "Orange"];
//              [0]      [1]      [2]       [3]       [4]
//
// BURN THIS INTO MEMORY: JavaScript arrays are ZERO-INDEXED. Index 0 = first element.

console.log(fruits[0]); // Output: Apple  (access first item using index 0)
console.log(fruits[1]); // Output: Mango  (access second item using index 1)
console.log(fruits[4]); // Output: Orange (access fifth item using index 4)

// COMMON ERROR: Accessing an index that doesn't exist
// console.log(fruits[10]); // Output: undefined (there is no 11th item in a 5-item array)
// ReferenceError would occur if you tried to access fruits[10] on a 5-item array.

// Another example: Requesting the array itself vs. a single element
// console.log(fruits);     // Output: [ 'Apple', 'Mango', 'Banana', 'Grapes', 'Orange' ]
// console.log(fruits[2]);  // Output: Banana (just the item at position 2)


// ═════════════════════════════════════════════════════════════════════════════════════
// SECTION 7 — Deduction Functions: Automating Investigation Logic
// WHY: Repeating the same mental work wastes time. Functions package logic for reuse.
//      Once written, call them anytime you need that deduction.
// ═════════════════════════════════════════════════════════════════════════════════════

// Define a simple function: takes two parameters, returns their sum
// In a real case, this might calculate: total evidence weight, combined suspect motivation, etc.
function add(a, b) {
    return a + b; // Return the result of adding the two numbers
}

// Call the add() function with our values (10 and 3)
add(a, b);
// Output: 13 (function runs and returns the value, but we don't capture or use it!)
// ⚠️ PROBLEM: This works, but we throw away the answer. It's wasted computation.

// BETTER: Capture the function's result in a variable to actually USE it
const caseScore = add(a, b);
console.log("Investigation score:", caseScore); // Output: Investigation score: 13
// Now the result is stored and you can reference it, display it, use it in other calculations.

// LESSON: When a function returns a value, assign it to a variable if you need it again!


// ═════════════════════════════════════════════════════════════════════════════════════
// SECTION 8 — Practical Guidelines: When and How to Use These Tools
// WHY: Code isn't just correct—it must be WISE. These guidelines help you write code
//      that teammates and your future self can understand and maintain.
// ═════════════════════════════════════════════════════════════════════════════════════

// RULE OF THUMB:

// 1. PREFER const by default. Only use let if the value truly changes. Skip var.
//    → const prevents accidental reassignment. It's a safety guard rail.
//    → If you find yourself changing a const, change it to let instead.

// 2. Use STRICT EQUALITY (===) in comparisons. Avoid == unless you understand type coercion.
//    → Loose equality causes silent bugs that confuse everyone later.
//    → Strict equality is explicit, honest, and predictable.

// 3. Name variables after what they REPRESENT, not their type or placeholder names.
//    → ❌ DON'T: let x = "Delhi";  ✓ DO: let city = "Delhi";
//    → Future-you will thank present-you when reading code six months later.

// 4. Use console.table() for arrays of objects. Use console.log() for simple values.
//    → console.table() auto-formats data into readable rows and columns.
//    → console.log() is better for debugging single values or flow.

// 5. Arrays are ZERO-indexed. The first element is [0], not [1]. Accept this now.
//    → You will forget this. You will get undefined. It's okay. This catches everyone.
//    → When debugging, always check: Are you accessing a valid index?

// 6. Keep functions small and focused. One clear job per function.
//    → A function that does 10 different things is actually 10 functions wearing one costume.
//    → Smaller functions are easier to test, reuse, and fix.

// 7. When a function returns a value, capture it! Don't let the answer disappear.
//    → WRONG: add(5, 3);  ✓ RIGHT: let result = add(5, 3);
//    → Captured results can be logged, stored, compared, or used in other calculations.


// ═════════════════════════════════════════════════════════════════════════════════════
// KEY TAKEAWAYS
// ═════════════════════════════════════════════════════════════════════════════════════

// 1. VARIABLES store data. const = unchanging, let = changeable.
//    Use const first; switch to let only when a value must change.

// 2. TYPE MATTERS. String "5" and number 5 are different.
//    Use === to compare accurately. Never use == in real code.

// 3. ARRAYS are ordered lists accessed by INDEX starting at ZERO.
//    Array[0] is the first element. Array[n] is the (n+1)th element. This is absolute.

// 4. OBJECTS store related data as key-value pairs { key: value }.
//    Arrays OF objects = structured, queryable data. Very powerful.

// 5. OPERATORS combine values: +, -, *, /, % (remainder).
//    Use them to transform and analyze numbers. They're your mathematical tools.

// 6. FUNCTIONS package reusable logic. Define once, call many times.
//    Always capture and use the result if the function returns something.

// 7. DEBUGGING TOOLS: console.log(), console.warn(), console.error(), console.table()
//    These are your magnifying glasses. Use them freely and fearlessly while learning.

// 8. MEANINGFUL NAMES beat clever names. Code is for humans first, computers second.
//    Write variable names, function names, and structure that explain your intent
//    to someone reading the code cold six months from now. Be kind to future-you.


helllo
