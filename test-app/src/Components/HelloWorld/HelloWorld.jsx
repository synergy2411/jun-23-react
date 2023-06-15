import React, { useState } from "react";
import Output from "./Output";

export default function HelloWorld() {
  const [show, setShow] = useState(false);

  const changeContentHandler = () => setShow(true);
  return (
    <div>
      <h1>Hello World!</h1>
      {!show && <Output>It's good to see you here!</Output>}
      {show && <Output>Changed content</Output>}
      <button onClick={changeContentHandler}>Chnage Content</button>
    </div>
  );
}
