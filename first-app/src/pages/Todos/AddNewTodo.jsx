import React from "react";
import { Form, redirect } from "react-router-dom";
import axios from "axios";

export default function AddNewTodo() {
  return (
    <div>
      <Form method="POST">
        <div className="form-group mb-3">
          <div className="row">
            <div className="col-8">
              <input type="text" name="label" className="form-control" />
            </div>
            <div className="col-4">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request, params }) {
  try {
    const data = await request.formData();
    const label = data.get("label");
    const result = await axios.post(
      "http://localhost:3030/todos",
      JSON.stringify({ label }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("RESULT : ", result);
    return redirect("/todos");
  } catch (err) {
    throw new Error(err);
  }
}
