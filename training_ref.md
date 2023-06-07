# Break time -

- Break - 7:00 - 7:10
- Break - 8:30 - 8:40

# JavaScript Environment

- Client Side : Browser
- Server Side : Node Runtime Environment

# ES6+ Feature

- Arrow functions

  > Short and clear Syntax
  > Great for writing one liner functions
  > can't be hoisted
  > callable, not constructable
  > can't use 'arguments' keyword
  > can't call them with 'new' keyword
  > don't have their own 'this' keyword
  > with / without curly brace ({ })

- Spread / Rest

  > denoted by (...)
  > Spread Operator : spread the collection into individual item
  > Rest Operator : create the collection from individual item; last argument in the function declaration.

- Block Scoping

  > allows to restrict the scope of variables to the nearest block (eg. for, if, else etc)
  > 'var' keyword : restrict the scope to the function
  > let
  > const

- Destructuring

  > unpack the collection (Object / Array)
  > Swallow : Some part still connected with original object
  > Deep Copy : cloned object is fresh copy; not connected with original object
  > -> JSON.parse(JSON.stringify(users));

- Template Literals : " " | ' ' | ` ` (back tick)

  > Embed the variables within string without using ( + ) concatenation operator
  > Multi-line strings without using (\n) operator

- Classes and Inheritance

- Module (ESM)

  > encapsulation
  > modular approach
  > avoids global pollution
  > 'import' and/or 'export' keywords
  > Types of Modules in JavaScript
  > -> ECMAScript Module (ESM) - browsers
  > use of 'import' and 'export' keyword

  -> CommonJS : NodeJS Runtime (require() & module.exports)
  -> AMD (Asynchronous Module Definition)
  -> UMD (Universal Module Definition)

> Named Module
> Default Module

- Promise API

  > Always asynchronous
  > Future Value
  > Capable to deal with Async JavaScript Code (eg. Callbacks)
  > Handshake between promise producer and consumer
  > Consuming promises by two ways -

        -> .then().catch()
        -> Async...await

  > Two states of Promise

        -> Pending
        -> Settled
            -> Resolve / Success State
            -> Rejected / Failure State

- Fetch API

  > built-in in browser
  > enable us to make XHR calls
  > returns the Promise
  > eg. fetch(url).then().catch()
  > https://jsonplaceholder.typicode.com/todos

- Generators
  > function with (\*)
  > returns special object - 'Iterator'
  > Iterator Object implments two protocols - (Iterable & Iterator Protocals)
  > 'yeild' keyword
  > lazy evaluation
  > maintains their old state
  > redux state management using SAGA / THUNK

> Arrays, Maps etc loop them using for...of

> Iterable Protocol - Object must have [Symbol.iterator] property
> Iterator Protocol - Object must return { value : "", done : boolean }

---

# JavaScript - Types

- Primitive : Numbers, String, Boolean
- Reference : Object, Arrays, Functions, Date

(const == mutable) --> NO

# JavaScript runs all sync code first, before Async Code

# All the Microtasks will execute before MacroTask

- MicroTask - queueMicrotask(), Promise()
- MacroTask - Timer, XHR etc

# Module Types

- ECMAScript Module - ESM - Default for Browsers

  > import & export

- CommonJS Module - Default for NodeJS
  > require() & module.exports keyword

---

## JSON-SERVER : fake REST API Server

- npm install json-server -g
- json-server --watch db.json --port=3001

## XHR Calls

GET
POST
DELETE

---

# Webpack - Module bundler

> Initialize NPM in project -> npm init -y
> Webpack dependencies -> npm install webpack webpack-cli -D
> to install lodash -> npm install lodash

> npm run build -> webpack

Default entry point -> src/index.js
Default output -> dist/main.js

> to load CSS files -> npm install style-loader css-loader
> to load babel -> npm install @babel/core @babel/preset-env babel-loader

> Default Webpack Loaders - JavaScript & JSON file

---

Code splitting
Plugins

> npm install html-webpack-plugin -D
> Webpack-dev-server
> React

---

HTML : presentation : "NOUNS"
JavaScript : Behaviour :"VERBS"
CSS : Layout & styles : "ADJECTIVE"

Designer : CSS
Developer : HTML & Javascript

---
