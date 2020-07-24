import React from "react";
import { Output } from "./Output";

export const Input = (props) => {
  return (
    <div>
      <Output name={props.value} />
      <input
        name={props.name}
        type="text"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};
