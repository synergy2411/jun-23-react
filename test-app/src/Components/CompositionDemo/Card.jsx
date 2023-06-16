import React from "react";
import classes from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={classes["backdrop"]}>
      <div className={classes["modal"]}>
        <div className="card">
          <div className="card-header" style={{ background: props.color }}>
            <h6>{props.title}</h6>
          </div>
          <div className="card-body">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
