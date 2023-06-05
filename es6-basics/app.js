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

let arr = [3, 4, 5];

let moreNumbers = [1, 2, ...arr];

console.log(moreNumbers);

let userOne = {
  email: "john@test",
  age: 32,
};

let userTwo = {
  ...userOne,
  age: 38,
};

console.log(userTwo); // { email, age }

let result = Object.assign({}, { email: "jenny@test" }, { age: 40 });

console.log("RESULT : ", result);
