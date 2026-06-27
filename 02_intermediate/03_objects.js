// Object Literals

const mySymbol = Symbol("kye1")

const JsUser = {
    name : "Kumkum",
    "Full name" : "Kumkum Sharma",
    [mySymbol] : "myKey", // important concept of Symbol
    age : 22,
}

// ---Printing Information---
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySymbol]);
// console.log(JsUser.age);

// ---Freeze---
// Object.freeze(JsUser);
// JsUser.age = 23;
// console.log(JsUser);

JsUser.greetingOne = function(){
    console.log("Hello there developer!!");
}

JsUser.greetingTwo = function(){
    console.log(`Hello there developer!!, ${this.name}`);
}

// console.log(JsUser.greetingOne());
// console.log(JsUser.greetingTwo());

const LinkedinUser1 = new Object(); // Singleton object
const LinkedinUser2 = {}; // Non-singleton object

LinkedinUser1.name = "Samuel";
LinkedinUser1.emailID = "samuel@google.com";
LinkedinUser1.position = "Senior Developer";
LinkedinUser1.isLoggedIn = true;

// console.log(LinkedinUser1);

const Profile = {
    email : "sharmakum@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Kumkum",
            lastName : "Sharma",
        }
    }
}

// console.log(Profile.fullName);

// Optional Chaining

// Merging
const object1 = {1 : "Amazon", 2 : "Microsoft"};
const object2 = {3 : "Google", 4 : "Flipkart"};

// const object3 = {object1, object2};
// const object3 = Object.assign({}, object1, object2)
const object3 = {...object1, ...object2}

// console.log(Object.keys(object3));
// console.log(Object.values(object3));
// console.log(Object.entries(object3));

const course = {
    name : "JavaScript",
    price : 9999,
    Instructor : "Jackson",
}

const {Instructor : Inst} = course; // Object destructure

// console.log(Instructor);
console.log(Inst);

// Destructure
// const navBar = ({company}) => {

// }
// navBar(company = "Amazon")