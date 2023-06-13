import React, { useReducer } from "react";

const initialState = {
  counter: 0,
};

const reducerFn = (state, action) => {
  if (action.type === "INCREMENT") {
    // return state.counter++           // STATE IS ALWAYS IMMUTABLE
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  } else if (action.type === "ADD_COUNTER") {
    return {
      counter: state.counter + action.value,
    };
  }
  return state;
};

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <div>
      <h1>Counter : {state.counter}</h1>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increase
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrease
      </button>
      <button
        className="btn btn-warning"
        onClick={() => dispatch({ type: "ADD_COUNTER", value: 10 })}
      >
        Add - 10
      </button>
    </div>
  );
}
