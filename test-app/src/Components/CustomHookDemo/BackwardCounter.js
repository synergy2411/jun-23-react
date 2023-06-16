import React, { useEffect, useState } from "react";
import useCounter from "./use-counter";

export default function BackwardCounter() {
  const counter = useCounter(false);

  return (
    <div>
      <h1>Backward Counter Component</h1>
      <p>Counter : {counter}</p>
    </div>
  );
}
