/**
 * Function declarations are hoisted in JS.
 * We can call a function before it is defined.
 */
morning() // Buenos días
console.log(typeof morning) // function
function morning() {
  console.log("Buenos días")
}
morning() // Buenos días

/**
 * But only function declarations are hoisted.
 * Function expressions are NOT hoisted.
 * Function expressions are treated as variables.
 */
// afternoon() // TypeError: afternoon is not a function
console.log(typeof afternoon) // undefined
var afternoon = function () {
  console.log("Buenas tardes")
}
afternoon() // Buenas tardes

// As you can see, there is no difference in hoisting for simple function expression and arrow function
// night() // TypeError: night is not a function
console.log(typeof night) // undefined
var night = () => {
  console.log("Buenas noches")
}
night() // Buenas noches

// tomorrow() // ReferenceError: Cannot access 'tomorrow' before initialization
// console.log(typeof tomorrow) // ReferenceError: Cannot access 'tomorrow' before initialization
const tomorrow = () => {
  console.log("Hasta mañana")
}
tomorrow() // Hasta mañana

// bye() // ReferenceError: Cannot access 'bye' before initialization
// console.log(typeof bye) // ReferenceError: Cannot access 'bye' before initialization
let bye = new Function("console.log('Adios amigos')")
bye() // Adios amigos