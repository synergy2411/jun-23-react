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

// Named Import
// import { sum, mul } from "./utils/maths.js";
// console.log("SUM is : ", sum(2, 5));

// import * as myMath from "./utils/maths.js";

// // Default Import
// import getMagicNumber, { getFortune } from "./utils/fortune.js";

// console.log("Multiply : ", myMath.mul(2, 5));

// console.log("Today's lucky Number : ", getMagicNumber());

// console.log(getFortune());

// PROMISES

// const promiseProducer = (ms) => {
//   let promise = new Promise((resolve, reject) => {
//     if (ms > 3000) {
//       reject(new Error("Too high value"));
//     } else {
//       setTimeout(() => {
//         resolve({ message: "SUCCESS" });
//       }, ms);
//     }
//   });

//   return promise;
// };

// Async...await

// const consumePromise = async () => {
//   try {
//     const data = await promiseProducer(2000);
//     console.log("ASYNC ->", data);
//   } catch (err) {
//     console.error(err);
//   }
// };

// consumePromise();

// then...catch
// const consumePromise = () => {
//   console.log("START");
//   promiseProducer(2000)
//     .then((data) => console.log(data))
//     .catch((err) => console.error("ERROR : ", err));

//   console.log("END");
// };

// consumePromise();

// console.log("Program Start");

// setTimeout(() => {
//   console.log("TIMER");
// }, 0);

// Promise.resolve("SUCCESS").then((data) => console.log(data));

// console.log("Program End");

// OUTPUT ->
// Program Start
// Program End
// SUCCESS

// window.onload = function () {
//   let url = "http://localhost:3000/todos";

//   const listContainer = document.getElementById("list-container");

//   const txtItem = document.getElementById("txtItem");

//   const btnAdd = document.getElementById("btnAdd");

//   btnAdd.addEventListener("click", (event) => {
//     event.preventDefault();

//     if (txtItem.value.trim() === "") return;

//     console.log("Entered : ", txtItem.value);

//     let newTodo = {
//       label: txtItem.value,
//     };

//     fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newTodo),
//     })
//       .then((response) => {
//         console.log("SUCCESS ,", response);
//       })
//       .catch((err) => console.error(err));
//   });

//   const fetchAllTodos = () => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((todos) => {
//         todos.forEach((todo) => {
//           const liEl = document.createElement("li");
//           liEl.innerHTML = `
//           ${todo.label}
//           <button>Delete</button>
//           `;
//           listContainer.appendChild(liEl);
//         });
//       })
//       .catch((err) => console.error(err));
//   };

//   fetchAllTodos();
// };

// let fruits = ["apple", "banana", "kiwi"];

// fruits.forEach( (item) => console.log("ITEM : ", item));

// --------------

// GENERATORS

// let fruits = ["apple", "banans", "kiwi"];

// for (let item of fruits) {
//   console.log(item);
// }

// console.log(fruits);

// let map = new Map();
// map.set("name", "John Doe");
// map.set("age", 32);

// for (let item of map) {
//   console.log(item);
// }

// ------------------------

// CLOSURES : process of binding the outer scope variables with nested function

// function mystry() {
//   let x = 4;
//   return function () {
//     return ++x;
//   };
// }

// const nestedFn = mystry();

// console.log(nestedFn()); // 5

// console.log(nestedFn()); // 6

// function buildTicket(transport) {
//   let numOfPassengers = 0;
//   return function (name) {
//     return `Hello Mr/Mrs ${name},
//     You are going via ${transport}.
//     Your Ticket ID is ${++numOfPassengers}.`;
//   };
// }

// const nestedShipFn = buildTicket("Ship");

// console.log(nestedShipFn("John")); // ?

// console.log(nestedShipFn("Jack")); // ?

// const nestedCarFn = buildTicket("Car");

// console.log(nestedCarFn("Alice")); // 1

// -------------

// function* theGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const it = theGenerator();

// console.log(it.next());

// console.log(it.next());

// console.log(it.next());

// console.log(it.next()); // {value : undefined, done : true}

// for (let item of theGenerator()) {
//   console.log("ITEM : ", item);
// }

// function* getNumbers() {
//   let i = 0;
//   while (true) {
//     yield ++i;
//   }
// }

// let it = getNumbers();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// let friends = ["f1", "f2", "f3"];

// function* firstGenerator() {
//   yield 1;
//   yield 2;
// }
// function* secondGenerator() {
//   yield* firstGenerator();
//   yield 3;
//   yield 4;
//   yield* friends;
// }

// const it = secondGenerator();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// -------------

function promiseOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("FIRST PROMISE");
    }, 1000);
  });
}
function promiseTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("SECOND PROMISE");
    }, 2000);
  });
}

async function* theGenerator() {
  try {
    const firstPromiseResult = await promiseOne();
    yield firstPromiseResult;

    const secondPromiseResult = await promiseTwo();
    yield secondPromiseResult;
  } catch (err) {
    console.log("Something bad happened");
  }
}

// for (let item of theGenerator()) {   // THROW ERROR- ASYNC VALUE RETURNED
//   console.log("ASYNC ITEM : ", item);
// }

async function consumeGenerator() {
  for await (let item of theGenerator()) {
    console.log("ASYNC ITEM : ", item);
  }
}

consumeGenerator();
