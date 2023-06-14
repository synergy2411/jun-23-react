import React from "react";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  addCounter,
  subtractCounter,
} from "../../store/Counter/counter-slice";

export default function CounterButton() {
  const dispatch = useDispatch();
  return (
    <div>
      <button className="btn btn-primary" onClick={() => dispatch(increment())}>
        Increase
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch(decrement())}
      >
        Decrease
      </button>
      <button
        className="btn btn-success"
        onClick={() => dispatch(addCounter(10))}
      >
        Add - 10
      </button>
      <button
        className="btn btn-warning"
        onClick={() => dispatch(subtractCounter(5))}
      >
        Subtract - 5
      </button>
    </div>
  );
}
