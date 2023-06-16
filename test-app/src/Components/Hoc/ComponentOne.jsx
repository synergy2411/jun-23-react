import React, { useState } from "react";
import WithCounter from "./WithCounter";

function ComponentOne(props) {
  return (
    <div>
      <h1>Component One</h1>
      <button onClick={props.handleClick}>{props.counter}</button>
    </div>
  );
}

export default WithCounter(ComponentOne);
