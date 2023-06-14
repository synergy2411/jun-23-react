import axios from "axios";
import React from "react";
import {
  useParams,
  useLoaderData,
  useSubmit,
  redirect,
} from "react-router-dom";

export default function TodoItem() {
  const response = useLoaderData();

  const submit = useSubmit();

  const deleteTodoHandler = () => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      submit({}, { method: "DELETE" });
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="text-center">{response.data.label.toUpperCase()}</h5>
          <div className="row">
            <div className="col-6">
              <div className="d-grid">
                <button className="btn btn-warning">Edit</button>
              </div>
            </div>
            <div className="col-6">
              <div className="d-grid">
                <button className="btn btn-danger" onClick={deleteTodoHandler}>
                  Delete
                </button>
              </div>
            </div>
          </div>
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

export async function action({ request, params }) {
  console.log("REQUEST : ", request);

  if (request.method === "DELETE") {
    try {
      const result = await axios.delete(
        "http://localhost:3030/todos/" + params.todoId
      );
      return redirect("/todos");
    } catch (err) {
      throw new Error(err);
    }
  }
}
