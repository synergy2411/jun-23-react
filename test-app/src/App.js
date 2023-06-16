import logo from "./logo.svg";
import "./App.css";
import Async from "./Components/Async/Async";
import ComponentOne from "./Components/Hoc/ComponentOne";
import ComponentTwo from "./Components/Hoc/ComponentTwo";
import BackwardCounter from "./Components/CustomHookDemo/BackwardCounter";
import ForwardCounter from "./Components/CustomHookDemo/ForwardCounter";
import Todo from "./Components/CustomHookDemo/Todo";
import Display from "./Components/CompositionDemo/Display";

function App() {
  return (
    <div className="App">
      <Display />

      {/* <Todo /> */}

      {/* <BackwardCounter />
      <ForwardCounter /> */}

      {/* <ComponentOne />
      <ComponentTwo /> */}
    </div>
  );
}

export default App;
