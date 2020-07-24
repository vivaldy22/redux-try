import React from "react";
import Output3 from "./Output3";

export const Output2 = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <Output3 name={props.name} />
    </div>
  );
};
