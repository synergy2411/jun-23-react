import React, { useState } from "react";
import SuccessCard from "./SuccessCard";
import ErrorCard from "./ErrorCard";
import Card from "./Card";
import MyButton from "./Button";

export default function Display() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const cancelSuccessCardHandler = () => setShowSuccess(false);
  const cancelErrorCardHandler = () => setShowError(false);

  return (
    <div>
      <button className="btn btn-success" onClick={() => setShowSuccess(true)}>
        Success
      </button>
      <button className="btn btn-danger" onClick={() => setShowError(true)}>
        Error
      </button>
      <hr />
      {showSuccess && (
        <SuccessCard
          button={<MyButton onClick={cancelSuccessCardHandler}>OK</MyButton>}
        />
      )}
      {showError && (
        <ErrorCard
          button={<MyButton onClick={cancelErrorCardHandler}>OK</MyButton>}
        />
      )}
    </div>
  );
}
