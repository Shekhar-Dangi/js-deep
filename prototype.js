console.log(Object);
// Object is a function but you know a function is a kind of Object(Data Type).
let object = Object({ name: "shekhar" });
// Every object of this type has a property __proto__ which is same as Object.prototype

console.log(object);

//Ref 1 - But Object is a function, how can we access properties on it?
console.log(Object.prototype === object.__proto__);

// Solution to Ref 1

function objectFunction() {
  this.x = 2;
  // length - no. of arguments expected
  // name - name of function
  console.log(objectFunction.length);
  console.log(objectFunction.name);
}
// Setting property on function(object)
objectFunction.proto = { proto: "type" };

console.log(objectFunction.proto);

// Listing all the properties of objectFunction
console.log(Object.keys(objectFunction));
// Above statement results in an array

// Array is again a functional object and below statement results in true
console.log(Array.prototype.__proto__ === Object.prototype);

console.log(Object.keys(objectFunction).__proto__ === Array.prototype);
// This results in true since every array has a prototype = Array.prototype

/*
prototype is not available on the instances themselves (or other objects), but only on the constructor functions while __proto__ is available on the instances. But __proto__ is func and it is also not a property on it as we checked earlier.
*/
console.log(objectFunction.__proto__, Array.__proto__);

// Finding prototype of Object.prototype or prototype of objects which have this prototype results in null
console.log(Object.prototype.prototype); // undefined
console.log(Object.prototype.__proto__); // null
console.log(object.__proto__.__proto__); // null

// Creates a new object having property x = 2
const obj1 = new objectFunction();

console.log(obj1.__proto__ === objectFunction.prototype);
console.log(obj1.__proto__);
// Function

console.log(Function.prototype);
// It is a built-in function object and it have property length and name and returns undefined when called
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Function.prototype.prototype); // undefined

// We knew Function.prototype have property length and name, so when we refer objectFunction.name, it is looked as objectFunction.__proto__.name
console.log(objectFunction.__proto__ === Function.prototype);

console.log(objectFunction.prototype.__proto__ === Object.prototype); // true
