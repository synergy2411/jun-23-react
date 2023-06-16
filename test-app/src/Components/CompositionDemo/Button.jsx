import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: lightgrey;
  color: black;

  padding: 0 12px;
  font-size: 1.2em;
  font-weight: 700;
  border: 1px solid blue;
`;

export default function MyButton(props) {
  return <Button {...props}>{props.children}</Button>;
}
