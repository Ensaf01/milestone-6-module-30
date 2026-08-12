const max=Math.max(12, 45, 78, 98, 65, 32);
console.log(max);

const numbers=[12, 45, 78, 98, 65, 32];
const max2=Math.max(...numbers);// array is spread into individual elements using the spread operator (...), allowing Math.max to evaluate each number separately.
console.log(max2);

// merging arrays using spread operator
const arr1=[1, 2, 3];
const arr2=[4, 5, 6];
const mergedArray=[...arr1, ...arr2,999];// spread operator is used to merge the two arrays into a new array, with 999 added at the end.
console.log(mergedArray);