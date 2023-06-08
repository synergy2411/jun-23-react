// const ExpenseItem = (props) => {
//   console.log(props);

import ExpenseDate from "../ExpenseDate/ExpenseDate";

// const ExpenseItem = ({ title, amount, createdAt, id }) => {
const ExpenseItem = (props) => {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header">
          <h6 className="text-center">{props.title.toUpperCase()}</h6>
        </div>
        <div className="card-body">
          <p>Amount : ${props.amount}</p>
          {/* <p>Date : {createdAt.toString()}</p> */}
          <ExpenseDate createdAt={props.createdAt} />

          {/* TO SEND ALL THE RECEIVED PROPS */}
          {/* <ExpenseDate {...props} /> */}
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
