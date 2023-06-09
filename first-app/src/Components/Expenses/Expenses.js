import { useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import AddExpense from "./AddExpense/AddExpense";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";

let INITIAL_EXPENSES = [
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

function Expenses() {
  let [toggle, setToggle] = useState(false);

  let [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  let [selYear, setSelYear] = useState("2021");

  const toggleClickHandler = () => {
    // toggle = !toggle;      // NEVER CHANGE STATE LIKE THIS, ALWAYS CALL STATE CHANGE FUNCTION
    setToggle(!toggle);
  };

  const addNewExpense = (expense) => {
    // setExpenses([expense, ...expenses]); // WHENEVER NEW STATE DEPENDS UPON EXISTING STATE, SUPPLY STATE CHANGE FUNCTIONC TO SETSTATE()
    setExpenses((prevState) => [expense, ...prevState]); // ASYNC
    console.log("expenses : ", expenses);
  };

  const onYearSelected = (selectedYear) => {
    console.log("SELECTED YEAR : ", selectedYear);
    setSelYear(selectedYear); // 2022
  };

  const filteredExpenses = expenses.filter(
    (exp) => exp.createdAt.getFullYear() === Number(selYear)
  );

  return (
    <div className="container">
      {/* ADD BUTTON TO TOGGLE */}
      <div className="row mb-4">
        <div className="col-4 offset-4">
          <div className="d-grid">
            <button className="btn btn-dark" onClick={toggleClickHandler}>
              Toggle
            </button>
          </div>
        </div>
        <div className="col-4">
          <ExpenseFilter onYearSelected={onYearSelected} />
        </div>
      </div>

      {toggle && <AddExpense addNewExpense={addNewExpense} />}

      {/* RENDERING ALL THE EXPENSES */}
      <div className="row">
        {filteredExpenses.map((expense) => (
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
