'use strict';

const button = document.getElementById("btn");

const alien = {
  name: "Shekhar",
  age: 18,
  getAge: function () {
    // this points to alien
    return this?.age;
  }
}

console.log(alien.getAge());
// logs 18

const f = alien.getAge;
console.log(f());
// Above statement gives error(that is why I used ?.) since it is a normal function call so this is undefined and you are trying to read property of undefined

function simple() {
  // strict_mode ? undefined : Window
  console.log(this);
}
simple();//  simple function call 

const simple2 = function () {
  // strict_mode ? undefined : Window
  console.log(this);
}
simple2(); //  simple function call

const complex = () => {
  // gets lexical scope(Window object in this case)
  console.log('complex : ', this);
}
complex();

// logs Window object so complex gets Window object 
console.log(this);

function clicked() {
  // regular_function ? buttom_element : lexical_scope
  console.log(this);
}

button.addEventListener('click', clicked);