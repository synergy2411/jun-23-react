// ARROW FUNCTIONS

// function demo() {
//   console.log("Doing something...");
// }

// const demoTwo = () => console.log("Demo Again!!");

// demoTwo();

// let numbers = [10, 20, 30, 40, 50];

// let doubleValueArray = numbers.map((value) => value * 2);

// console.log(doubleValueArray);

// let user = {
//   name: "John Doe",
//   age: 32,
//   getDetails: () => this.name + " -> " + this.age,
// };

// console.log(user.getDetails());

// let user = {
//   firstName: "John",
//   lastName: "Doe",
//   getDetails: function () {
//     // let that = this;     // ---> NOT NEED TO PRESERVE
//     // function nestedFn() {
//     //   return that.firstName;
//     // }
//     // return nestedFn;
//     return () => "Hello from " + this.lastName + " " + this.firstName;
//   },
// };

// let nestedFn = user.getDetails();

// console.log(nestedFn());

// LEXICAL SCOPING -
// - scope is determined by the physical
//  location of the funciton

// let x = 301;
// function a() {
//   //   let x = 201;
//   function b() {
//     // let x = 101;
//     console.log(x); //
//   }
//   b();
// }

// a();

// let x = 201;

// function b() {
//   console.log(x); //        201
// }

// function a() {
//   let x = 101;
//   b();
// }

// a();

// REST OPERATOR : last argument in function declaration

// function doSomething(email, ...args) {
//   console.log(args[0]); // 32
// }

// doSomething("john@test");
// doSomething("john@test", 32);
// doSomething("john@test", 32, true);

// let arr = [3, 4, 5];

// let moreNumbers = [1, 2, ...arr];

// console.log(moreNumbers);

// let userOne = {
//   email: "john@test",
//   age: 32,
// };

// let userTwo = {
//   ...userOne,
//   age: 38,
// };

// console.log(userTwo); // { email, age }

// let result = Object.assign({}, { email: "jenny@test" }, { age: 40 });

// console.log("RESULT : ", result);

// BLOCK SCOPE

// function doSomething(arr) {
//   if (arr.length > 2) {
//     let LOAD = "LOADING";
//     console.log(FLASH); // ?
//   } else {
//     let FLASH = "FLASHING";
//   }
// }

// doSomething([2, 3, 4, 5]);

// const username = "John Doe";

// const age = 30;

// age = 32;

// const user = {
//   name: "John",
// };

// user = {
//   name: "Jenny",
// };

// // user.name = "Jenny";

// console.log(user); // ?

// const fruits = ["Apple", "Banana", "Kiwi"];

// fruits.push("Oranges");

// console.log(fruits); // ?

// fruits = ["Apple", "Banana", "Kiwi", "Guava"];

// DESTRUCTURING

// let friends = ["Joe", "Monica", "Chandler", "Ross"];

// let [f1, , f3, f4, f5] = friends;

// console.log(f3); // ?

// console.log(f5); // undefined

// let user = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 32,
// };

// let { lastName: ln, age, firstName: fn } = user;

// console.log(ln, age, fn);

// let user = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 32,
//   friends: ["Joe", "Monica", "Ross"],
//   address: {
//     street: "Baker Street",
//     city: "London",
//   },
// };

// let {
//   firstName,
//   lastName,
//   age,
//   friends: [f1, f2, f3],
//   address: { street: st, city: ct },
// } = user;

// console.log(ct, f2, firstName);

// let users = [
//   { email: "john@test", age: 32 },
//   { email: "jenny@test", age: 34 },
//   { email: "jack@test", age: 36 },
// ];

// let [{ email: e1, age: a1 }, { email: e2, age: a2 }, { email: e3, age: a3 }] =
//   users;

// a1 = 44;

// console.log(e2, a3);

// console.log(users); // ?

// let [u1, u2, u3] = users;

// u1.age = 40;

// console.log(users); // ?

// // Deep Copy
// const clonedCopy = JSON.parse(JSON.stringify(users));

// clonedCopy[0].age = 21;

// console.log("ORIGINAL : ", users);
// console.log("CLONED : ", clonedCopy);

// TEMPLATE LITERALS

// let username = "John Doe";
// let userAge = 32;

// let greet = `Hello from ${username},

// I'm ${userAge} years old!
// `;

// let greetAgain = "Hello from " + username + ",\n"+ "I'm " + userAge + " years old"

// console.log(greet);

// CLASS
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }

// class Student extends Person {
//   constructor(email, age, name) {
//     super(name);
//     this.email = email;
//     this.age = age;
//   }

//   getDetails() {
//     return `Hello from ${super.getName()}- Email : ${this.email} - Age : ${
//       this.age
//     }`;
//   }
// }

// let joe = new Student("joe@test", 34, "Joe");

// console.log(joe.getDetails());

// let x = 101;

import { sum, mul } from "./utils/maths.js";

console.log("SUM is : ", sum(2, 5));
