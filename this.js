"use strict";

const button = document.getElementById("btn");

const alien = {
  name: "Shekhar",
  age: 18,
  getAge: function () {
    // this points to alien
    return this?.age;
  },
  sayHello: () => {
    // Gets this(Window object here(!strict_mode)) from outer "normal" function
    console.log(this);
  },
  getName: function () {
    console.log(this);
    const sayHello = () => {
      // this from outer "normal" function which is getName() here
      console.log(this); // prints object calling the getName() function
    };
    sayHello();
  },
};

alien.sayHello(); // consoles Window object(!strict_mode)
alien.getName();

console.log(alien.getAge());
// logs 18

const f = alien.getAge;
console.log(f());
// Above statement gives error(that is why I used ?.) since it is a normal function call so this is undefined and you are trying to read property of undefined

function simple() {
  // strict_mode ? undefined : Window
  console.log(this);
}
simple(); //  simple function call

const simple2 = function () {
  // strict_mode ? undefined : Window
  console.log(this);
};
simple2(); //  simple function call

const complex = () => {
  // gets lexical scope(Window object in this case)
  console.log("complex : ", this);
};
complex();

// logs Window object so complex gets Window object
console.log(this);

function clicked() {
  // button element in case of regular function and lexical scope in case of arrow function
  console.log(this);
}

button.addEventListener("click", clicked);
