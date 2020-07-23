import React from "react";

const CalculatorInput = (props) => {
  const { name, onChange } = props;

  return <input type="text" name={name} onChange={onChange} />;
};

export default CalculatorInput;
