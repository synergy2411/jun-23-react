import axios from "axios";
import React from "react";
import { useParams, useLoaderData } from "react-router-dom";

export default function TodoItem() {
  const response = useLoaderData();

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="text-center">{response.data.label.toUpperCase()}</h5>
        </div>
      </div>
    </div>
  );
}

export async function loader({ request, params }) {
  try {
    const response = await axios.get(
      "http://localhost:3030/todos/" + params.todoId
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
}
