const createComponent = () => {
  let divElement = document.createElement("div");

  divElement.innerHTML = `Hello World`;

  return divElement;
};

document.body.appendChild(createComponent());
