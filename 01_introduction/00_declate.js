// This is forbidden in strict mode.
work = "trabajar"

// The following two logs are pointing to the same variable
console.log(work) // trabajar
console.log(globalThis.work) // trabajar


/**
 * A global object is an object that always exists in the global scope.
 * When we declare a variable in a global scope without var, let or const,
 * it gets attached to a global object called `globalThis`
 * For web browsers, it is the `window` object
 * For node, it is simply called `global`
 */
console.log(globalThis === global) // true

{
  // Office Block
  var work = "trabajar"
  console.log(work) // trabajar
  console.log(globalThis.work) // undefined
  // As you can see, var variables do not get attached to `globalThis`
}
console.log(work)
// As you see, work never really ends even after office.

{
  // House Block
  const dream = "soñar"
  console.log(dream) // soñar
}
// console.log(dream) // ReferenceError: dream is not defined

{
  // Party Block
  let dance = "bailar"
  console.log(dance) // bailar
}
// console.log(dance) // ReferenceError: dance is not defined
