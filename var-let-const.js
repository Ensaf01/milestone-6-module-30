console.log(a); // undefined 
// var a is hoisted and initialized with undefined,because of hoisting, the variable declaration is moved to the top of its scope, but the assignment remains in place.
var a = 10; // can reassign the value of a and can redeclare it in the same scope

console.log(b); // Error
let b = 20; // let and const are hoisted but not initialized, so accessing them before their declaration results in a ReferenceError.
// can reassign the value of b and can not redeclare it in the same scope

console.log(c); // Error
const c = 30; // const must be initialized at the time of declaration and cannot be reassigned.