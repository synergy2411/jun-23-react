import _ from "lodash";

const createComponent = () => {
  let divElement = document.createElement("div");

  divElement.innerHTML = _.join(["Hello", "World", "Again", "!!!"], " ");

  return divElement;
};

document.body.appendChild(createComponent());
