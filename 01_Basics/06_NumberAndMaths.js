const package = new Number(800000)
console.log(package);

console.log(package.toString());
console.log(typeof package);

console.log(package.toString().length);
console.log(package.toFixed(2));

const decNumber = 273.8492;
console.log(decNumber.toPrecision(3));

console.log(package.toLocaleString('en-IN'));

console.log(Math);
console.log(Math.abs(-873));
console.log(Math.round(492.99));
console.log(Math.ceil(749.79));
console.log(Math.max(104, 284, 341, 402, 100));
console.log(Math.min(104, 284, 341, 402, 100));

// Random
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);