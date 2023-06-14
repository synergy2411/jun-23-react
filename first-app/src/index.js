import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// import ReactDOM from "react-dom";
// Client Side rendering (CSR)
// Old way
// ReactDOM.render(<App />, document.getElementById("root"), () =>
//   console.log("LOADED")
// );

// Server-side rendering (SSR)
// ReactDOM.hydrate()
