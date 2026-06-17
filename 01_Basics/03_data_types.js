// Data Types- can be primitive and non-primitive

// 1. primitive- represent single values and are immutable.

// Number- numeric values (integers and decimal)
let age = 42;
let pi = 3.14;

// String- text in quotes
let text = "Hello, World!";

// Boolean- Represents a logical value (true or false)
let bool = true;

// Undefined- declared but not assigned a value
let undef;
console.log(undef);

// NUll- represent absent value
let absent = null;
console.log(absent);

// Symbol- represents unique and immutable values. often used as object keys.
let sym = Symbol('unique');

// BigInt- integer larger than number

// 2. Non-Primitive- are objects and can store collections of data or more complex entities.

// Object- Shows key-value pairs.
let employee = {
    name: "Vikram",
    age: 28
}

// Array- shows an ordered list of values
let cars = ["BMW", "Ferrari", "Mercedes", "Audi"]

// Function- shows reusuable blocks of code.
function emp(){
    console.log("Hey I am an employee");
}
