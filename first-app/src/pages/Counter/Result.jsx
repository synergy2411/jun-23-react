import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeResult, deleteResult } from "../../store/Result/result-slice";

export default function Result() {
  const dispatch = useDispatch();

  const result = useSelector((store) => store.resultReducer.result);

  const counter = useSelector((store) => store.counterReducer.value);

  return (
    <div>
      <div className="row mb-4">
        <div className="col-6 offset-3">
          <div className="d-grid">
            <button
              className="btn btn-danger"
              onClick={() => dispatch(storeResult(counter))}
            >
              Store Result
            </button>
          </div>
        </div>
      </div>
      <ul className="list-group">
        {result.map((r, index) => (
          <li className="list-group-item" key={index}>
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}
