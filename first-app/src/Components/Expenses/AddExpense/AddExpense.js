import { useState } from "react";

export default function AddExpense() {
  const [enteredTitle, setEnteredTitle] = useState("Sample text");

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="text-center">Add New Expense - {enteredTitle}</h2>
        <form>
          {/* title */}
          <div className="form-group">
            <label htmlFor="title">Title : </label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          {/* amount */}
          {/* date */}
          {/* button */}
        </form>
      </div>
    </div>
  );
}
