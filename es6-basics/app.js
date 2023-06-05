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

// LEXICAL SCOPING

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

let x = 201;

function b() {
  console.log(x); //        201
}

function a() {
  let x = 101;
  b();
}

a();
