// shallow copy and deep copies

const myArr = [10, 20, 30, 40]
const myArr2 = new Array(1, 2, 3, 4)

// Array Methods- pop, push, unshift, shift, includes, join(Converts into string)
myArr2.push(5);
console.log(myArr2);

//slice, splice

// concat, spread, 
const myArr3 = [1, 2, 3, [4, 5, 6], 8, [8, 2, [1, 2]]]

const anotherArray = myArr3.flat(Infinity)
console.log(anotherArray);

console.log(Array.from("VikramBatra"))

let A = 30000;
let B = 83999;
let C = 90000;

console.log(Array.of(A, B, C))

console.log(Array.from({name:"Kumkum"})) // Special case