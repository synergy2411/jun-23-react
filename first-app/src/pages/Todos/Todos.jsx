import React from "react";
import axios from "axios";

import { useLoaderData, useNavigate, json } from "react-router-dom";

import classes from "./Todos.module.css";

export default function Todos() {
  const result = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Todos</h1>
      {/* To add new todo */}
      <div className="mb-4">
        <button
          className="btn btn-lg btn-secondary"
          onClick={() => navigate("new")}
        >
          Add New
        </button>
      </div>
      <ul className="list-group">
        {result.data.map((todo) => (
          <li
            className={`${classes["clickable"]} list-group-item mb-3`}
            key={todo.id}
            onClick={() => navigate(todo.id)}
          >
            {todo.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  try {
    const result = await axios.get("http://localhost:3030/todos");
    return result;
  } catch (err) {
    throw json({ message: "Unable to fetch todos" }, { status: 500 });
  }
}
