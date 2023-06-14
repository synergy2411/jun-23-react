import React from "react";
import { useParams } from "react-router-dom";

export default function TodoItem() {
  const params = useParams();
  console.log("PARAMS : ", params);

  return <div>TodoItem</div>;
}
