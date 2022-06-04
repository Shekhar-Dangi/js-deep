'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  if (true) {
    var azadParinda = "Shekhar"
    let caged = "Save me!"; // Block scoped

    // Functions are block - scoped while using strict mode
    function print() {
      var azadParinda2 = "Shekhar"; // Function scoped(not block)
      console.log(`${username}'s age is ${age}`);
    }
  }
  console.log(caged); // Gives error
  console.log(azadParinda); // No error
  console.log(azadParinda2); // Gives error
  print(); // Gives error if strict mode is enabled
}

const username = "Shekhar";
calcAge(2004);