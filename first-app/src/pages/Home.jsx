import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <button className="btn btn-info" onClick={() => navigate("products")}>
        Go to Products
      </button>
    </div>
  );
}
