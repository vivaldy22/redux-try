import React from "react";
import { Output2 } from "./Output2";

export const Output = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <Output2 name={props.name} />
    </div>
  );
};
