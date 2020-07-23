import React, { Component } from "react";
import { connect } from "react-redux";
import CalculatorControl from "../components/CalculatorControl";
import CalculatorOutput from "../components/CalculatorOutput";
import CalculatorInput from "../components/CalculatorInput";

class Calculator extends Component {
  state = {
    operand1: 0,
    operand2: 0,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { operand1, operand2 } = this.state;

    return (
      <div>
        <CalculatorOutput result={this.props.result} />
        <CalculatorInput name="operand1" onChange={this.handleChange} />
        <CalculatorInput name="operand2" onChange={this.handleChange} />
        <CalculatorControl
          label={"+"}
          clicked={() => {
            this.props.handleAdd(operand1, operand2);
          }}
        />
        <CalculatorControl
          label={"-"}
          clicked={() => {
            this.props.handleSub(operand1, operand2);
          }}
        />
        <CalculatorControl
          label={"*"}
          clicked={() => {
            this.props.handleMul(operand1, operand2);
          }}
        />
        <CalculatorControl
          label={"/"}
          clicked={() => {
            this.props.handleDiv(operand1, operand2);
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { result: state.result };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd: (operand1, operand2) => {
      dispatch({ type: "+", operand1: operand1, operand2: operand2 });
    },
    handleSub: (operand1, operand2) => {
      dispatch({ type: "-", operand1: operand1, operand2: operand2 });
    },
    handleMul: (operand1, operand2) => {
      dispatch({ type: "*", operand1: operand1, operand2: operand2 });
    },
    handleDiv: (operand1, operand2) => {
      if (operand2 == 0) {
        dispatch({ type: "error" });
      } else {
        dispatch({ type: "/", operand1: operand1, operand2: operand2 });
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
