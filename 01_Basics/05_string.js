const name = "Kumkum";
const age = 22;

console.log('Hello my name is ${name} and my age is ${age}'); // string interpolation

const University = new String('Thapar-University');
console.log(University[2]);
console.log(University.__proto__);

console.log(University.length);
console.log(University.toUpperCase());

console.log(University.charAt(5));
console.log(University.indexOf('U'));

// Slicing
const newString1 = University.substring(0,9);
console.log(newString1);

// const newString2 = University.slice(-7, 2); 
// console.log(newString2);

const country = " Australia Sydney       "
console.log(country.trim());

const url = "https://github.com/kumkum-sharma/JavaScript_P";
console.log(url.replace('P', 'Prac'));

//split, includes