import { useState } from "react";
import ClassBasedComp from "./Components/Demo/ClassBasedComp";
import Expenses from "./Components/Expenses/Expenses";

function App() {
  let [username, setUsername] = useState("John Doe");
  let [toggle, setToggle] = useState(false);

  return (
    <div>
      <h1>App coming soon...</h1>

      <button onClick={() => setUsername("Chnaged Name")}>
        Change Username
      </button>

      <button className="btn btn-secondary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>

      {toggle && <ClassBasedComp username={username} />}

      {/* <Expenses /> */}
    </div>
  );
}

export default App;
