const newDate = new Date();
console.log(typeof newDate);

console.log(newDate.toString());
console.log(newDate.toLocaleString());
console.log(newDate.toDateString());

let MyDate = new Date(2026, 7, 6, 5, 8);
console.log(MyDate.toDateString()); // Thu Aug 06 2026
console.log(MyDate.toLocaleString()); // 8/6/2026, 5:08:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(MyDate.getTime());
