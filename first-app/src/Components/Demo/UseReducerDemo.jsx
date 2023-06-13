import React, { useReducer } from "react";

const initialState = {
  counter: 0,
  result: [],
};

const reducerFn = (state, action) => {
  if (action.type === "INCREMENT") {
    // return state.counter++           // STATE IS ALWAYS IMMUTABLE
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  } else if (action.type === "SUBTRACT_COUNTER") {
    return {
      ...state,
      counter: state.counter - action.value,
    };
  } else if (action.type === "STORE_RESULT") {
    return {
      ...state,
      result: [state.counter, ...state.result],
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
      <button
        className="btn btn-info"
        onClick={() => dispatch({ type: "SUBTRACT_COUNTER", value: 5 })}
      >
        Subtract - 5
      </button>
      <hr />

      <button
        className="btn btn-success"
        onClick={() => dispatch({ type: "STORE_RESULT" })}
      >
        Store Result
      </button>
      <ul>
        {state.result.map((r, index) => (
          <li key={index}>{r}</li>
        ))}
      </ul>
    </div>
  );
}
