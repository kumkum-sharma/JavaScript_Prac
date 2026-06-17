/* Variables - A container used to store data values.
Three ways to declare variables- let, const, and var
*/

/* 1. let - can be reassigned, cannot be redeclared in the scope, Block scoped (accessed only inside the block where it is declared)*/

let name = "Jack";
name = "Sam"; // Allowed to reassign
console.log(name); // Sam

/* 2. const - Cannot be reassigned, Block scoped, must be initialized while declaring. */
const PI = 3.14;

// PI = 3.1415; // Not allowed to reassign

const employee = {
    name : "Sameul"
};

employee.name = "Shaun"; // Allowed

console.log(employee.name); // Shaun

/*
But we cannot reassign the whole object
employee = {}; // Not allowed
*/

/*
3. var - can be reassigned, can be redeclared, Function scoped (accessible everywhere inside the function), has hoisting issue. */
var age = 22;
console.log(age);
var age = 23; // allowed to reassign
console.log(age);

if(true) {
    var x = 10;
}
console.log(x); // 10

/* Example of scope */
if(true){
    let a = 100;
    const b = 200;
    var c = 300;
}

// console.log(a); // Not allowed
// console.log(b); // Not allowed
console.log(c); // 300