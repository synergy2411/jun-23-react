import _ from "lodash";
import data from "./data.json";
import "./styles.css";

console.log("DATA : ", data);

const createComponent = () => {
  let divElement = document.createElement("div");

  divElement.innerHTML = _.join(["Hello", "World", "Again", "!!!"], " ");

  divElement.classList.add("hello");

  return divElement;
};

document.body.appendChild(createComponent());
