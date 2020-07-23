import React from "react";

const CalculatorControl = (props) => {
  return <button onClick={props.clicked}>{props.label}</button>;
};

export default CalculatorControl;
