// Data Types in JavaScript
// JavaScript has several data types, which can be categorized into two main groups: primitive and non-primitive (reference) types. 


const weaponName = "Flame Sword"; // String
console.log("Weapon Name:", weaponName, " | Type:", typeof weaponName ) //Flame Sword
// typeof operator is used to determine the type of a variable or value in JavaScript. 
// It returns a string indicating the type of the operand.

const attackPower = 75; // Number
const attackUpgrade = 1.5; // Number
console.log("Attack Power:", attackPower, " | Type:", typeof attackPower) //75
console.log("Attack Upgrade:", attackUpgrade, " | Type:", typeof attackUpgrade) //1.5

const attackBoost = 1n; // BigInt
console.log("Attack Boost:", attackBoost, " | Type:", typeof attackBoost) //1n
// bigint is a built-in object in JavaScript that provides a way to represent whole numbers larger than 2^53 - 1, 
// which is the largest number that can be safely represented with the Number type.
// BigInt values are created by appending 'n' to the end of an integer literal or by calling the BigInt() constructor.

const isLegendary = true; // Boolean
console.log("Is Legendary:", isLegendary, " | Type:", typeof isLegendary) //true
//In Javascript, boolean is a primitive data type that can have one of two values: true or false.
const unknownWeapon = undefined; // Undefined
console.log("Unknown Weapon:", unknownWeapon, " | Type:", typeof unknownWeapon) //undefined
// In JavaScript, undefined is a primitive value that indicates that a variable has been declared but has not been assigned a value.

const brokenWeapon = null; // Null
console.log("Broken Weapon:", brokenWeapon, " | Type:", typeof brokenWeapon) //null
// In JavaScript, null is a primitive value that represents the intentional absence of any object value. 
// It is often used to indicate that a variable should not point to any object or that an object is empty.

console.log(typeof "Chaicode")
console.log(typeof "Hello World")
console.log(typeof 42)
console.log(typeof 42n)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof Symbol)
console.log(typeof {})
console.log(typeof [])
console.log(typeof function () { })

/*****************************************************************************************************************************************/
//copying values in javascript
//variables that hold primitive data types (string, number, boolean, null, undefined, symbol) are copied by value. 
// This means that when you assign a variable to another variable, a new copy of the value is created. 
// Changes to the new variable do not affect the original variable.

let originalHP = 100;
let cloneHP = originalHP;
cloneHP = 80;
console.log("Original HP:", originalHP) //100
console.log("Clone HP:", cloneHP) //80

//variables that hold non-primitive data types (objects, arrays, functions) are copied by reference.    
// This means that when you assign a variable to another variable, both variables point to the same underlying data. 
// Changes to the new variable will affect the original variable because they reference the same data.

const originalSword = {
    name: "Flme sword",
    damage: 75,
    typeofWeapon: "Fire"
};
const cloneSword = originalSword;
console.log("Original Sword:", originalSword); // { name: "Flme sword", damage: 75, typeofWeapon: "Fire" }
console.log("Clone Sword:", cloneSword); // { name: "Flme sword", damage: 75, typeofWeapon: "Fire" }
cloneSword.damage = 100;
console.log("Original Sword:", originalSword); // { name: "Flme sword", damage: 100, typeofWeapon: "Fire" }
console.log("Clone Sword:", cloneSword); // { name: "Flme sword", damage: 100, typeofWeapon: "Fire" }

// To create a copy of an object without affecting the original, you can use methods like Object.assign() or the spread operator (...).
const originalShield = {
    name: "Ice Shield",
    defense: 50,
    typeofShield: "Ice"
};
const cloneShield = { ...originalShield };
cloneShield.defense = 70;
console.log("Original Shield:", originalShield); // { name: "Ice Shield", defense: 50, typeofShield: "Ice" }
console.log("Clone Shield:", cloneShield); // { name: "Ice Shield", defense: 70, typeofShield: "Ice" }
/*
Object.assign() can also be used to create a shallow copy of an object. However, it's important to note that both the spread operator and 
Object.assign() create a shallow copy, which means that if the object contains nested objects, 
the nested objects will still be shared between the original and the clone.*/

// nested objects require a deep copy to ensure that all levels of the object are copied correctly.
const originalArmor = {
    name: "Earth Armor",
    defense: 80,
    materials: {
        primary: "Stone",
        secondary: "Wood"
    }
};
const cloneArmor = JSON.parse(JSON.stringify(originalArmor));
cloneArmor.materials.primary = "Metal";
console.log("Original Armor:", originalArmor); // { name: "Earth Armor", defense: 80, materials: { primary: "Stone", secondary: "Wood" } }
console.log("Clone Armor:", cloneArmor); // { name: "Earth Armor", defense: 80, materials: { primary: "Metal", secondary: "Wood" } }

const originalA = {
    name: "Earth Armor",
    defense: 80,
    materials: {
        primary: "Stone",
        secondary: "Wood"
    }
};
const cloneA = structuredClone(originalA);
cloneA.materials.primary = "Metal";
console.log("Original Armor:", originalA); // { name: "Earth Armor", defense: 80, materials: { primary: "Stone", secondary: "Wood" } }
console.log("Clone Armor:", cloneA); // { name: "Earth Armor", defense: 80, materials: { primary: "Metal", secondary: "Wood" } }
