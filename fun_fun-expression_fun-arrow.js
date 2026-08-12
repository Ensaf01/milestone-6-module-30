function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

//arrow function
// arrow functions are a more concise way to write functions in JavaScript, introduced in ES6. They have a shorter syntax and do not have their own this, arguments, super, or new.target bindings. Instead, they inherit these from the parent scope.
const addArrow = (a, b) => a + b;// kind of function expression, but with a shorter syntax and lexical scoping of the this keyword.
const result = addArrow(10, 20);
console.log(result);

// function expression
const add2=function(a, b) {
    return a + b;
}

console.log(add2(12, 20));