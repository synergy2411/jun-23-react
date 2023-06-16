import React, { useEffect, useState } from "react";
import useCounter from "../../hooks/use-counter";

export default function ForwardCounter() {
  const counter = useCounter();

  return (
    <div>
      <h1>Forward Counter Component</h1>
      <p>Counter : {counter}</p>
    </div>
  );
}
