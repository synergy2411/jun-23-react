import React from "react";
import { useSelector } from "react-redux";
import CounterButton from "./CounterButton";
import Result from "./Result";

export default function Counter() {
  const counter = useSelector((store) => {
    // console.log("STORE : ", store);
    return store.counterReducer.value;
  });

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <CounterButton />
      <hr />
      <Result />
    </div>
  );
}
