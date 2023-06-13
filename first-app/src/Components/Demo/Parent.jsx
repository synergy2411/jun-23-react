import React, { useState, useCallback } from "react";
import Child from "./Child";

export default function Parent() {
  const [toggle, setToggle] = useState(false);

  console.log("[PARENT]");

  const demoFn = useCallback(() => console.log("the Demo Function"), []);

  return (
    <div>
      <h2>The Parent Component</h2>
      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      <Child toggle={true} demoFn={demoFn} />
    </div>
  );
}
