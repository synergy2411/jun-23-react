import React from "react";

function Child(props) {
  console.log("[CHILD]");
  return (
    <div>
      <h4>The Child Component</h4>
      {props.toggle && <p>Some demo Output</p>}
    </div>
  );
}

export default React.memo(Child);

// checks the equality of props

// props.prevToggle === props.currToggle;
// if both are same, do not re-render the child component

// Referential Equality
// () => {} === () => { }          // FALSE
// props.prevDemoFn === props.cuuDemoFn         // FALSE
