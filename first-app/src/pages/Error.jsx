import React from "react";
import Header from "./Header";

export default function ErrorPage() {
  return (
    <div>
      <Header />
      <br />
      <h1 className="text-center">Oops</h1>
      <p className="text-center">Not found</p>
    </div>
  );
}
