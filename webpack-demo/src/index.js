import _ from "lodash";
import data from "./data.json";
import "./styles.css";
import printSomething from "./moduleB";

console.log("DATA : ", data);

const createComponent = () => {
  let divElement = document.createElement("div");

  divElement.innerHTML = _.join(["Hello", "World", "Again", "!!!"], " ");

  divElement.classList.add("hello");

  const btnEl = document.createElement("button");

  btnEl.innerHTML = "Click Me & check console";

  btnEl.onclick = printSomething;

  divElement.appendChild(btnEl);

  return divElement;
};

document.body.appendChild(createComponent());
