import { useState } from "react";
import ClassBasedComp from "./Components/Demo/ClassBasedComp";
import Expenses from "./Components/Expenses/Expenses";
import CounterError from "./Components/Demo/ErrorBoundaryDemo/CounterError";
import ErrorBoundary from "./Components/Demo/ErrorBoundaryDemo/ErrorBoundary";
import Login from "./Components/Login/Login";
import FormikDemo from "./Components/Demo/Formik/FormikDemo";
import UseEffectDemo from "./Components/Demo/UseEffectDemo";

function App() {
  // let [username, setUsername] = useState("John Doe");
  // let [toggle, setToggle] = useState(false);

  return (
    <div className="container">
      <h1>App coming soon...</h1>
      <UseEffectDemo />
      {/* <FormikDemo /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;

{
  /* <ErrorBoundary>
<CounterError />
</ErrorBoundary>

<ErrorBoundary>
<Expenses />
</ErrorBoundary> */
}

{
  /* <button onClick={() => setUsername("Chnaged Name")}>
Change Username
</button>

<button className="btn btn-secondary" onClick={() => setToggle(!toggle)}>
Toggle
</button>

{toggle && <ClassBasedComp username={username} />} */
}
