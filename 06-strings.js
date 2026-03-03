// Strings declared with double quotes, single quotes, or backticks
// Double quotes and single quotes are functionally equivalent, but backticks (template literals) allow for string interpolation and multi-line strings.
const codeName = "Shadow Fox";
const codeName2 = 'Shadow Fox';
const codeName3 = `Shadow Fox`;

console.log(codeName);
console.log(codeName2);
console.log(codeName3);

// String interpolation with template literals
const backupName = String("Night Wolf");
console.log(backupName);

// String interpolation with template literals
const templateName = `The code name is ${codeName}`;
console.log(templateName);