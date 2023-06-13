import React, { useState, useCallback, useMemo } from "react";
import Child from "./Child";

export default function Parent() {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  console.log("[PARENT]");

  const demoFn = useCallback(() => ["C", "B", "C"], [show]);

  //   const demoFn = useMemo(() => () => console.log("Demo Function"), []);

  const numbers = useMemo(() => [201, 202, 203, 204], []);

  return (
    <div>
      <h2>The Parent Component</h2>
      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show
      </button>
      <Child toggle={true} demoFn={demoFn} numbers={numbers} />
    </div>
  );
}
