console.log(uno) // undefined
var uno = 1
/**
 * var declarations are moved to the top of the file. But not the initializations.
 * This is known as hoisting.
 * Final code looks like:
 * var uno
 * console.log(uno)
 * uno = 1
 */

// console.log(dos) // ReferenceError: Cannot access 'dos' before initialization
const dos = 2

// console.log(tres) // ReferenceError: Cannot access 'tres' before initialization
let tres = 3

// As you can see, the declarations of `const` and `let` were not hoisted