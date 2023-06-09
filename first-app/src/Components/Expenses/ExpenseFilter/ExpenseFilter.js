import React from "react";

export default function ExpenseFilter(props) {
  const changeHandler = (event) => {
    props.onYearSelected(event.target.value);
  };

  return (
    <select className="form-control" onChange={changeHandler}>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
    </select>
  );
}
