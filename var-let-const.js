console.log(a); // undefined 
// var a is hoisted and initialized with undefined,because of hoisting, the variable declaration is moved to the top of its scope, but the assignment remains in place.
var a = 10;

console.log(b); // Error
let b = 20;

console.log(c); // Error
const c = 30;