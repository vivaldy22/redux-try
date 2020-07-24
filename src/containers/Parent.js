import React, { Component } from "react";
import { connect } from "react-redux";
import { Input } from "../components/input";

class Parent extends Component {
  state = {
    name: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.props.handleNameChange(this.state.name);
  };

  render() {
    return (
      <div>
        <Input
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
      </div>
    );
  }
}

const setState = (dispatch) => {
  return {
    handleNameChange: (name) => {
      dispatch({ type: "SET_USER", inputName: name });
    },
  };
};

export default connect(null, setState)(Parent);
