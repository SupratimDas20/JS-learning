// Passing a function as an argument
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort(function(a, b) {
  return a - b;
});

console.log(sorted); // [1, 1, 3, 4, 5]