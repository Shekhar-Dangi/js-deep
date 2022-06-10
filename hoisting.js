impossible(); // Gives error since impossible you are in TDZ

mayBePossible(); // Gives error since possible is undefined(var - undefined)

console.log(mayBePossible); // logs undefined

possible(); // Executes

console.log(tryMe); // strict_mode ? error : undefined

// Same works for let/const variables since functions are also kind of variables
const impossible = () => {
  console.log("Won't support");
}

var mayBePossible = () => {
  console.log("May be Possible!");
}

function possible() {
  console.log("Possbile");
}

if (true) {
  // scope = strict_mode ? block : function
  function tryMe() {
    console.log("Try again!");
  }
}