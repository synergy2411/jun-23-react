import React from "react";
import { TodoItem } from "../model/Todo";

const Todo: React.FC<{ todos: TodoItem[] }> = (props) => {
  return (
    <div>
      <h1>Todo Component</h1>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>{todo.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
