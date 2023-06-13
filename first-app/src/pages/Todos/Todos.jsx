import React from "react";
import axios from "axios";

import { useLoaderData } from "react-router-dom";

export default function Todos() {
  const result = useLoaderData();

  return (
    <div>
      <h1>Todos</h1>
      <ul className="list-group">
        {result.data.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function fetchTodos() {
  const result = await axios.get("http://localhost:3030/todos");

  return result;
}
