const [a, b, c] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

const person = { name: "John",
    age: 30,
    city: "New York"
};
const names=person.name;
console.log(names); // John

console.log("destructuring object");
const { name, age:boyos, city } = person;
//use property name as variable name, and assign the corresponding value from the object to that variable.
console.log(name); // John
console.log(boyos); // 30
console.log(city); // New York

//swapping variables using destructuring
console.log("swapping variables using destructuring");
let x = 10;
let y = 20;
[x, y] = [y, x];
console.log(x); // 20
console.log(y); // 10

//skipping values using destructuring
console.log("skipping values using destructuring");
const arr = [1, 2, 3, 4, 5];
const [first, , third] = arr;
console.log(first); // 1
console.log(third); // 3