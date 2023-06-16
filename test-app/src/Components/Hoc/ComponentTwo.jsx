import React, { useState } from "react";
import WithCounter from "./WithCounter";

function ComponentTwo(props) {
  return (
    <div>
      <h1>Component Two</h1>
      <button onClick={props.handleClick}>{props.counter}</button>
    </div>
  );
}

export default WithCounter(ComponentTwo);
