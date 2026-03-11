// ========================================================================================
// COMPREHENSIVE GUIDE: SHALLOW COPY vs DEEP COPY IN JAVASCRIPT
// ========================================================================================

console.log("========== UNDERSTANDING COPY METHODS IN JAVASCRIPT ==========\n");

// ========================================================================================
// PART 1: REFERENCE vs VALUE (Quick Review)
// ========================================================================================
console.log("--- PART 1: REFERENCE vs VALUE ---\n");

// Primitives are copied by VALUE
let a = 10;
let b = a;
b = 20;
console.log("Primitive - a:", a, "b:", b); // a: 10, b: 20 (independent)

// Objects are copied by REFERENCE
let obj1 = { x: 10 };
let obj2 = obj1;
obj2.x = 20;
console.log("Reference - obj1.x:", obj1.x, "obj2.x:", obj2.x); // Both: 20 (same reference)

// ========================================================================================
// PART 2: SHALLOW COPY METHODS
// ========================================================================================
console.log("\n--- PART 2: SHALLOW COPY METHODS ---\n");

// METHOD 1: Spread Operator (...)
console.log("METHOD 1: Spread Operator");
const person = { name: "Alice", age: 25, address: { city: "NYC", zip: "10001" } };
const personSpread = { ...person };
personSpread.name = "Bob";
personSpread.address.city = "Boston";
console.log("Original:", person); // address.city changed!
console.log("Shallow Copy:", personSpread);
console.log("Nested object affected?", person.address.city === "Boston"); // true ✗

// METHOD 2: Object.assign()
console.log("\nMETHOD 2: Object.assign()");
const car = { brand: "Toyota", engine: { type: "V6", hp: 300 } };
const carCopy = Object.assign({}, car);
carCopy.brand = "Honda";
carCopy.engine.hp = 400;
console.log("Original:", car);
console.log("Copy:", carCopy);
console.log("Engine affected?", car.engine.hp === 400); // true ✗

// METHOD 3: Array.slice() for arrays
console.log("\nMETHOD 3: Array.slice() for arrays");
const colors = ["red", "green", { shade: "dark" }];
const colorsCopy = colors.slice();
colorsCopy[0] = "blue";
colorsCopy[2].shade = "light";
console.log("Original:", colors);
console.log("Copy:", colorsCopy);
console.log("Nested object affected?", colors[2].shade === "light"); // true ✗

// METHOD 4: Array spread operator
console.log("\nMETHOD 4: Array spread operator [...]");
const numbers = [1, 2, { value: 3 }];
const numbersCopy = [...numbers];
numbersCopy[0] = 99;
numbersCopy[2].value = 100;
console.log("Original:", numbers);
console.log("Copy:", numbersCopy);
console.log("Nested affected?", numbers[2].value === 100); // true ✗

// ========================================================================================
// PART 3: DEEP COPY METHODS
// ========================================================================================
console.log("\n--- PART 3: DEEP COPY METHODS ---\n");

// METHOD 1: JSON.parse(JSON.stringify())
console.log("METHOD 1: JSON.parse(JSON.stringify())");
const player = {
    name: "Hero",
    stats: { level: 10, hp: 100 },
    inventory: ["sword", "shield", { rarity: "rare" }]
};
const playerDeep1 = JSON.parse(JSON.stringify(player));
playerDeep1.name = "Villian";
playerDeep1.stats.level = 20;
playerDeep1.inventory[2].rarity = "legendary";
console.log("Original:", player);
console.log("Deep Copy:", playerDeep1);
console.log("Nested affected?", player.stats.level === 20); // false ✓
console.log("Array item affected?", player.inventory[2].rarity === "legendary"); // false ✓

// LIMITATION: JSON.parse(JSON.stringify()) - Functions are NOT copied
console.log("\nJSON.stringify() LIMITATION: Functions");
const objWithFunction = {
    name: "Test",
    greet: function () { return "Hello"; }
};
const copied = JSON.parse(JSON.stringify(objWithFunction));
console.log("Original has greet?", typeof objWithFunction.greet); // "function"
console.log("Copy has greet?", typeof copied.greet); // "undefined" ✗

// LIMITATION: JSON.parse(JSON.stringify()) - Dates become strings
console.log("\nJSON.stringify() LIMITATION: Dates");
const objWithDate = { name: "Test", created: new Date("2025-01-01") };
const copiedDate = JSON.parse(JSON.stringify(objWithDate));
console.log("Original type:", typeof objWithDate.created); // "object"
console.log("Copy type:", typeof copiedDate.created); // "string" ✗

// LIMITATION: JSON.parse(JSON.stringify()) - Undefined values
console.log("\nJSON.stringify() LIMITATION: Undefined");
const objWithUndefined = { a: 1, b: undefined, c: 3 };
const copiedUndefined = JSON.parse(JSON.stringify(objWithUndefined));
console.log("Original:", objWithUndefined); // { a: 1, b: undefined, c: 3 }
console.log("Copy:", copiedUndefined); // { a: 1, c: 3 } - b is missing ✗

// METHOD 2: structuredClone() - RECOMMENDED (Modern way)
console.log("\nMETHOD 2: structuredClone() - MODERN & RECOMMENDED");
const monster = {
    name: "Dragon",
    abilities: { fire: 90, ice: 40 },
    nested: { deep: { deeper: { value: "found" } } }
};
const monsterClone = structuredClone(monster);
monsterClone.name = "Ice Dragon";
monsterClone.abilities.fire = 30;
monsterClone.nested.deep.deeper.value = "changed";
console.log("Original:", monster);
console.log("Deep Copy:", monsterClone);
console.log("All levels independent?", monster.nested.deep.deeper.value === "found"); // true ✓

// ========================================================================================
// PART 4: COMPARISON TABLE
// ========================================================================================
console.log("\n--- PART 4: COMPARISON TABLE ---\n");
console.log(`
METHOD                          SHALLOW  NESTED  FUNCTIONS  DATES   PERFORMANCE
─────────────────────────────────────────────────────────────────────────────────
Spread Operator (...)            ✓        ✗        ✓         ✓       Very Fast
Object.assign()                  ✓        ✗        ✓         ✓       Very Fast
Array.slice()                    ✓        ✗        ✓         ✓       Very Fast
Array spread [...]               ✓        ✗        ✓         ✓       Very Fast
JSON.parse(stringify)            ✗        ✓        ✗         ✗       Slow
structuredClone()                ✗        ✓        ✓         ✓       Fast
`);

// ========================================================================================
// PART 5: CUSTOM DEEP COPY FUNCTION
// ========================================================================================
console.log("\n--- PART 5: CUSTOM DEEP COPY FUNCTION ---\n");

function customDeepCopy(obj) {
    // Handle primitives
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    // Handle Dates
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

    // Handle Arrays
    if (Array.isArray(obj)) {
        return obj.map(item => customDeepCopy(item));
    }

    // Handle Objects
    const copy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = customDeepCopy(obj[key]);
        }
    }
    return copy;
}

const complexObj = {
    name: "Test",
    tags: ["a", "b", { nested: "value" }],
    metadata: { created: new Date("2025-01-01"), count: 5 }
};

const customClone = customDeepCopy(complexObj);
customClone.tags[2].nested = "modified";
customClone.metadata.count = 999;

console.log("Original:", complexObj);
console.log("Custom Deep Copy:", customClone);
console.log("Nested independent?", complexObj.tags[2].nested === "value"); // true ✓

// ========================================================================================
// PART 6: PRACTICAL EXAMPLES
// ========================================================================================
console.log("\n--- PART 6: PRACTICAL EXAMPLES ---\n");

// EXAMPLE 1: State management in React (WHY deep copy matters)
console.log("EXAMPLE 1: State Management");
const appState = {
    user: { name: "John", settings: { theme: "dark", notifications: true } },
    posts: [
        { id: 1, likes: 10, author: { id: 1, name: "John" } },
        { id: 2, likes: 20, author: { id: 2, name: "Jane" } }
    ]
};

// ❌ WRONG: Shallow copy - modifying nested state
const wrongUpdate = { ...appState };
wrongUpdate.user.settings.theme = "light";
console.log("WRONG: Original was modified:", appState.user.settings.theme === "light");

// ✓ CORRECT: Deep copy - modifying nested state
const correctUpdate = structuredClone(appState);
correctUpdate.user.settings.theme = "light";
console.log("CORRECT: Original unchanged:", appState.user.settings.theme === "dark");

// EXAMPLE 2: API response handling
console.log("\nEXAMPLE 2: API Response Cache");
const apiCache = {
    users: [
        { id: 1, name: "Alice", profile: { bio: "Developer", location: "NYC" } },
        { id: 2, name: "Bob", profile: { bio: "Designer", location: "LA" } }
    ]
};

// Making a deep copy before modification ensures cache integrity
const modifiedData = structuredClone(apiCache);
modifiedData.users[0].profile.bio = "Senior Developer";
console.log("Cache unchanged:", apiCache.users[0].profile.bio === "Developer");

// EXAMPLE 3: Configuration cloning
console.log("\nEXAMPLE 3: Configuration Cloning");
const defaultConfig = {
    database: { host: "localhost", port: 5432 },
    features: { auth: true, api: true, admin: false }
};

const devConfig = structuredClone(defaultConfig);
devConfig.database.host = "dev-db.local";
devConfig.features.debug = true;
console.log("Default config unchanged:", defaultConfig.database.host === "localhost");

// ========================================================================================
// PART 7: COMMON MISTAKES
// ========================================================================================
console.log("\n--- PART 7: COMMON MISTAKES ---\n");

console.log("MISTAKE 1: Thinking Object.assign() does deep copy");
const mistake1 = {
    settings: { volume: 50, brightness: 100 }
};
const wrongCopy = Object.assign({}, mistake1);
wrongCopy.settings.volume = 0;
console.log("Original settings.volume:", mistake1.settings.volume); // 0 (OOPS!)

console.log("\nMISTAKE 2: Using JSON.stringify for functions");
const mistake2 = {
    render: () => "Hello",
    config: { api: "https://example.com" }
};
const badCopy = JSON.parse(JSON.stringify(mistake2));
console.log("render function lost?", badCopy.render === undefined); // true (OOPS!)

console.log("\nMISTAKE 3: Modifying after reference assignment");
const orig = { x: { y: 10 } };
const ref = orig; // Just a reference, not a copy!
ref.x.y = 20;
console.log("Original modified:", orig.x.y); // 20 (OOPS!)

// ========================================================================================
// PART 8: BEST PRACTICES
// ========================================================================================
console.log("\n--- PART 8: BEST PRACTICES ---\n");

console.log(`
BEST PRACTICES:
───────────────────────────────────────────────────────────────────────

1. USE structuredClone() WHEN YOU NEED DEEP COPY (ES2022+)
   - Modern, handles most cases including Dates, Maps, Sets
   - Very efficient
   
2. USE SPREAD OPERATOR (...) FOR SHALLOW COPIES
   - Fast and readable
   - Best for simple objects without nesting
   
3. USE JSON.parse(JSON.stringify()) ONLY WHEN:
   - You have plain objects/arrays
   - NO functions, undefined, or Date objects
   - You're certain no circular references exist
   
4. USE CUSTOM COPY FUNCTIONS FOR:
   - Special handling of specific types
   - Performance-critical code
   - Complex nested structures with specific requirements
   
5. AVOID:
   - Using = for copying objects (creates reference)
   - Shallow copies for nested state management
   - JSON.stringify for objects with functions
   
6. WHEN IN DOUBT:
   - structuredClone() is the safest default choice
   - If not supported, use JSON.parse(JSON.stringify())
   - Always test with your actual data
`);

// ========================================================================================
// END OF GUIDE
// ========================================================================================
console.log("\n========== END OF COMPREHENSIVE GUIDE ==========");
