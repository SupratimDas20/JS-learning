/**
 * =============================================================================
 * FILE: 01-console.js
 * PURPOSE: Demonstrates various JavaScript console methods and debugging techniques
 * DESCRIPTION: This file contains examples of different ways to output information
 *              to the console for debugging and logging purposes using a detective
 *              case scenario as the theme.
 * =============================================================================
 */

// ============= BASIC CONSOLE OUTPUT =============
// Define crime scene clues as string constants
const clue1 = "Muddy footprint near the window";
const clue2 = "Broken glass on the table";

// console.log() - Standard method to print values to the console
// Useful for general-purpose logging and debugging
console.log("Clue found !", clue1);
console.log("Clue found !", clue2);

// ============= LOGGING SUSPECT INFORMATION =============
// Note: console.log() prints values from memory/variables to the console for inspection
const suspectName = "Supratim";
const suspectAge = 20;
// Multiple values can be logged in a single console.log() call, separated by commas
console.log("Suspect:", suspectName, "| Age:", suspectAge);

// ============= WARNING AND ERROR MESSAGES =============
// console.warn() - Displays warning messages (usually in orange/yellow color in console)
console.warn("Warning : Fingerprint evedence deteced");

// console.error() - Displays error messages (usually in red color in console)
console.error("Warning : Fingerprint evedence deteced");

// ============= STRUCTURED DATA LOGGING =============
// Array of objects containing evidence with id, item name, and location
// This represents a collection of evidence found at the crime scene
const evidenceLog = [
    { id: 1, item: "Muddy Footprint", location: "Window Still" },
    { id: 2, item: "Broken Glass", location: "Living Room" },
    { id: 3, item: "Red Fiber Strand", location: "Door Handle" },
];

// These log statements are duplicated (can be removed if not needed for testing)
console.log("Hello");
console.log("Hello");

// ============= TABLE FORMAT LOGGING =============
// console.table() - Displays data in a formatted table structure
// Much more readable than plain console.log() for arrays and objects
console.table(evidenceLog);

// ============= GROUPED LOGGING =============
// console.group() - Creates a collapsible group in the console
// Useful for organizing related log statements logically
console.group("Group starts")
console.log("My log 1 ");
console.log("My log 2 ");
console.log("My log 3 ");
// console.groupEnd() - Closes/ends the group
console.groupEnd();

// ============= PERFORMANCE TIMING =============
// console.time() - Starts a timer with the given label
// Useful for measuring how long code execution takes
console.time("Time taken to solve the case");

// Loop that increments dnaMatches counter 1 million times
// This simulates a time-consuming operation for performance testing
let dnaMatches = 0;
for (let i = 0; i < 1_000_000; i++) {
    dnaMatches += 1;
}

// console.timeEnd() - Stops the timer and logs elapsed time in milliseconds
// The label must match the label used in console.time()
console.timeEnd("Time taken to solve the case");



// console.time("time starts");
// console.log("This is the outer level");
// console.group();
// console.log("Level 2");
// console.group();
// console.log("Level 3");
// console.warn("More of level 3");
// console.groupEnd();
// console.log("Back to level 2");
// console.groupEnd();
// console.log("Back to the outer level");
// console.timeEnd();