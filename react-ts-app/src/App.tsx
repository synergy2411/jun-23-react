import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { TodoItem } from "./model/Todo";

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([
    new TodoItem("101", "React is awesome"),
    new TodoItem("102", "React for Masters"),
  ]);

  const addTodo = (newItem: TodoItem) => {
    setTodos((prevTodos) => [newItem, ...prevTodos]);
  };

  return (
    <div className="App">
      <AddTodo onAddTodo={addTodo} />

      <Todo todos={todos} />
    </div>
  );
}

export default App;
