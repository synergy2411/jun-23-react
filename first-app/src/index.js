import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// import ReactDOM from "react-dom";
// Client Side rendering (CSR)
// Old way
// ReactDOM.render(<App />, document.getElementById("root"), () =>
//   console.log("LOADED")
// );

// Server-side rendering (SSR)
// ReactDOM.hydrate()
