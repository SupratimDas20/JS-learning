const clue1 = "Muddy footprint near the window";
const clue2 = "Broken glass on the table";

console.log("Clue found !", clue1);
console.log("Clue found !", clue2);

// console.log: print statement,prints value from memory
const suspectName = "Supratim";
const suspectAge = 20;
console.log("Suspect:", suspectName, "| Age:", suspectAge);

console.warn("Warning : Fingerprint evedence deteced");
console.error("Warning : Fingerprint evedence deteced");

const evidenceLog = [
    { id: 1, item: "Muddy Footprint", location: "Window Still" },
    { id: 2, item: "Broken Glass", location: "Living Room" },
    { id: 3, item: "Red Fiber Strand", location: "Door Handle" },
];
console.log("Hello");
console.log("Hello");


console.table(evidenceLog);

console.group("Group starts")
console.log("My log 1 ");
console.log("My log 2 ");
console.log("My log 3 ");
console.groupEnd();

console.time("Time taken to solve the case");
let dnaMatches = 0;
for(let i = 0; i < 1_000_000; i++) {
    dnaMatches += 1;
}

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