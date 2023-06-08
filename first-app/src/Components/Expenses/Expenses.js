import ExpenseItem from "./ExpenseItem/ExpenseItem";

function Expenses() {
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

  return (
    <div className="container">
      <div className="row">
        {expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            createdAt={expense.createdAt}
            id={expense.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Expenses;
