import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../components/CounterControl";
import CounterOutput from "../components/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label={"Increment"} clicked={this.props.onIncrement} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ctr: state.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: "INCREMENT", value: 1 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
