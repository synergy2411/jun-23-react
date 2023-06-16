import React from "react";
import useFetch from "../../hooks/use-fetch";

export default function Todo() {
  const { isLoading, data } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  console.log(isLoading, data);
  return <div>Todo</div>;
}
