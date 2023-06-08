// const ExpenseItem = (props) => {
//   console.log(props);

const ExpenseItem = ({ title, amount, createdAt, id }) => {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header">
          <h6 className="text-center">{title.toUpperCase()}</h6>
        </div>
        <div className="card-body">
          <p>Amount : ${amount}</p>
          <p>Date : {createdAt.toString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
