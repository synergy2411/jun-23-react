import React from "react";

export default function ExpenseDate({ createdAt }) {
  const day = createdAt.toLocaleString("en-US", { day: "numeric" });
  const month = createdAt.toLocaleString("en-US", { month: "long" });
  const year = createdAt.getFullYear();

  return (
    <p>
      Date : {month} {day}, {year}
    </p>
  );
}
