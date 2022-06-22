// Array Destructuring

const arr = [1, 2, 3, 4, 5];
let [a, b, c, , e] = arr;

// a = 1, b = 2, c = 3, e = 5
console.log(a, b, c, e);

// Swap two variables using array destructuring
[a, b] = [b, a];
console.log(a, b);

// Destructuring in nested arrays
const arr2 = [1, 2, [3, 4, 5]];
let [a2, b2, [c2, d2, e2]] = arr2;
// a2 = 1, b2 = 2, c2 = 3, d2 = 4, e2 = 5
console.log(a2, b2, c2, d2, e2);

// Default Values
const arr3 = [1, 2, 3, 4];
let [a3 = 10, b3 = 20, c3 = 30, d3 = 40, e3 = 50] = arr3;
// a3 = 1, b3 = 2, c3 = 3, d3 = 4, e3 = 50
console.log(a3, b3, c3, d3, e3);
