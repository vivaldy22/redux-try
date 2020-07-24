import React from "react";
import { connect } from "react-redux";

const Output3 = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
};

const getState = (state) => {
  return {
    name: state.rInput.input.user.name,
  };
};

export default connect(getState)(Output3);
