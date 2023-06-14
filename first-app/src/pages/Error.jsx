import React from "react";
import Header from "./Header";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let message = "Something went wrong";
  let title = "Oops!!";

  if (error.data.message) {
    message = error.data.message;
    title = error.status;
  }

  return (
    <div>
      <Header />
      <br />
      <h1 className="text-center">{title}</h1>
      <p className="text-center">{message}</p>
    </div>
  );
}
