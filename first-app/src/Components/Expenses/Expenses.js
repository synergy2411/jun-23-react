import { useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

function Expenses() {
  let [toggle, setToggle] = useState(false);

  let expenses = [
    {
      id: "e001",
      title: "grocery",
      amount: 12.9,
      createdAt: new Date("Dec 20, 2021"),
    },
    {
      id: "e002",
      title: "shopping",
      amount: 19.9,
      createdAt: new Date("Jan 2, 2022"),
    },
    {
      id: "e003",
      title: "planting",
      amount: 32.9,
      createdAt: new Date("Feb 12, 2023"),
    },
  ];

  const toggleClickHandler = () => {
    // toggle = !toggle;      // NEVER CHANGE STATE LIKE THIS, ALWAYS CALL STATE CHANGE FUNCTION
    setToggle(!toggle);
  };

  return (
    <div className="container">
      {/* ADD BUTTON TO TOGGLE */}
      <div className="row mb-4">
        <div className="col-4 offset-4">
          <div className="d-grid">
            <button className="btn btn-dark" onClick={toggleClickHandler}>
              Toggle
            </button>
            {toggle ? "TRUE" : "FALSE"}
          </div>
        </div>
      </div>

      {/* RENDERING ALL THE EXPENSES */}
      <div className="row">
        {expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            createdAt={expense.createdAt}
            id={expense.id}
            key={expense.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Expenses;
