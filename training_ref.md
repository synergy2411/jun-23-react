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

> npm run eject
> npm run build
> npm run test
> npm run start

Code splitting
Plugins

> npm install html-webpack-plugin -D

> Webpack-dev-server

- npm install webpack-dev-server -D
  > React

---

HTML : presentation : "NOUNS"
JavaScript : Behaviour :"VERBS"
CSS : Layout & styles : "ADJECTIVE"

Designer : CSS
Developer : HTML & Javascript

---

> npm install

# React Libraries

> npm install react react-dom
> npm install @babel/preset-react -D (Transpiler for JSX)

---

# ATOMIC DESIGN

- ATOM : smallest unit. e.g one button, one input field
- MOLECULES : combo of atoms. eg. Search bar -> one text field + one button
- ORGANISM : combo of molecules. eg. Navigation Bar -> multiple links + Search Bar
- TEMPLATE: combo of organism. eg. Form ->
- PAGE : hold the complate app

# Thinking in React way

"Component should be reusable"

# React CLI tool - CREATE REACT APP

- npx create-react-app <project-name>

# React : for Web Applications -> web browsers

# React-native : for Native Application : Camera, Geolocation etc

# Ionic Framework : Hybrid Apps (Web Browsers as well as an access native features)

-> npx create-react-app first-app

-> cd first-app

-> npm start

---

# Bootstrap - responsive

- Support of CSS classes
- npm install bootstrap

---

Class based - Error Boundary

# to render the UI quickly and efficiently

# Side effects

- axios, fetch API
- SPA - react-router
- form validation - formik, react-hook-form
- State Management - redux pattern

---

Component - Expenses, ExpenseItem, ExpenseDate, AddExpense
Props - communicate between Parent & Child Component
State - useState()

Component : useState() / Class Based component
Branch of Component : Context API
App wide data : Redux Store

# PureComponent -> checks for prevProps vs nextProps.

- if prevProps !== nextProps, then re-render the component
- if prevProps === nextProps, then do not re-render the component

# useMemo / useCallback -> functional Components

---

Side Effects

- Class Based - State Management & Side effect (Life Cycle Methods)
- Functional - useState() | useEffect() hook

<ErrorBoundary>
  <Counter />
</ErrorBoundary>
--------

Life Cycle Methods - 2 phases

1. Render Phase -> Constructor, Render
2. Commit Phase -> componentDidMount, componentDidUpdate, componentWillUnmount

---

- Controlled Comp ->

  > More Predictable
  > Allow us to validate the elements at the time of inputting values
  > More Controlled

- Uncontrolled Comp ->
  > Third-party library / widgets

---

# Formik - to validate React form elements without maintaining their state manually

- npm install formik

# Form Validation Libraries

- Joi
- Yup
- react-hook-form

---

localStorage.getItem()
localStorage.setItem()

---

# useEffect Flavors -

- useEffect(cb) : cb will execute for every cycle of re-rendering
- useEffect(cb, []) |componentDidMount| : cb will execute only for the initial rendering of component
- useEffect(cb, [Dep1,Dep2, ...Depn]) : |componentDidUpdate|
  > cb will execute at the intial rendering of component
  > cb will also execute whenever the mentioned Dependency will change
- useEffect(cb => cleanUpFn, [Deps]) : | componentWillUnmount |
  > cb wll execute at the intiail rendering of component
  > cleanUpFn will execute before the next cycle of CB.
  > cb will also execute whenever the mentioned Dependency will change
  > cleanUpFn will also execute just before the component is unloaded

Country > Cities
Two drop downs

- Countries
- Cities (to be displayed according to the selected country)

---

# Axios > npm install axios

---

# Object.Provider = React.createContext({})

- Data that change less frequently
- Should not create more ( > 3 ) context providers
- Applicable only for the specific branch of component Tree

---

> json-server --watch db.json --port=3030

---

.jsx -> hold the component code

const INITIAL_EXPENSES = []

function Todo () {

  <!-- All updated values should ewirte inside component -->

return (

<div>
<h1>Todo</h1>
</div>
)
}

---

Webpack Plugin -> HotModuleReload

- HOC
  Custom Hooks

WithCounter(SomeComp);
