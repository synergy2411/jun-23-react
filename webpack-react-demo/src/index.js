import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));

// root.render(<h1>React App is running</h1>);
root.render(<App />);

console.log("LOADED");
