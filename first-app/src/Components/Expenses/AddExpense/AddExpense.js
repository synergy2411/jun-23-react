import { useState } from "react";
import { v4 } from "uuid";

export default function AddExpense(props) {
  const [enteredTitle, setEnteredTitle] = useState("Sample text");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredCreatedAt, setEnteredCreatedAt] = useState("");

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
  const amountChangeHandler = (event) => setEnteredAmount(event.target.value);
  const createdAtChangeHandler = (event) =>
    setEnteredCreatedAt(event.target.value);

  const addClickHandler = (event) => {
    event.preventDefault();
    let newExpense = {
      id: v4(),
      title: enteredTitle,
      amount: Number(enteredAmount),
      createdAt: new Date(enteredCreatedAt),
    };
    props.addNewExpense(newExpense);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="text-center">Add New Expense</h2>
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
          <div className="form-group">
            <label htmlFor="title">Amount : </label>
            <input
              type="number"
              name="amount"
              className="form-control"
              value={enteredAmount}
              onChange={amountChangeHandler}
              step="0.1"
            />
          </div>
          {/* date */}
          <div className="form-group">
            <label htmlFor="title">Date : </label>
            <input
              type="date"
              name="createdAt"
              className="form-control"
              value={enteredCreatedAt}
              onChange={createdAtChangeHandler}
              min="2021-04-01"
              max="2023-12-31"
            />
          </div>
          {/* button */}
          <div className="form-group">
            <div className="row">
              <div className="col">
                <div className="d-grid">
                  <button className="btn btn-primary" onClick={addClickHandler}>
                    Add
                  </button>
                </div>
              </div>
              <div className="col">
                <div className="d-grid">
                  <button className="btn btn-warning">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
