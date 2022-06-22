// Object Destructring
const person = { name: "Alien", age: 18 };
// name: "Alien", age: 18
const { name, age } = person;

// Use different name
const { name: firstName, age: pAge } = person;
// firstName: "Alien", pAge: 18

// Mutating Variables
let a = 10,
  b = 20;
const t = { a: 1, b: 3 };
({ a, b } = t);
// a = 1, b = 3

// Nested Objects
const obj = { x: 12, y: { z: 3 } };
let {
  y: { z: another },
} = obj;
// another = 3
