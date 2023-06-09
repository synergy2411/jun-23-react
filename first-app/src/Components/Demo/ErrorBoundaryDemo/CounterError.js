import React, { useState } from "react";

export default function CounterError() {
  const [counter, setCounter] = useState(0);

  const onIncrease = () => setCounter(counter + 1);

  if (counter > 3) {
    throw new Error("Too high value");
  }

  return (
    <div>
      <p>Counter : {counter}</p>
      <button className="btn btn-primary" onClick={onIncrease}>
        Increase
      </button>
    </div>
  );
}
