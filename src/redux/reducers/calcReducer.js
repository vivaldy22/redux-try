const initialState = {
  result: 0,
};

const calcReducer = (state = initialState, action) => {
  const { type, operand1, operand2 } = action;
  switch (type) {
    case "+":
      return {
        ...state,
        result: Number(operand1) + Number(operand2),
      };
    case "-":
      return {
        ...state,
        result: Number(operand1) - Number(operand2),
      };
    case "*":
      return {
        ...state,
        result: Number(operand1) * Number(operand2),
      };
    case "/":
      return {
        ...state,
        result: Number(operand1) / Number(operand2),
      };
    case "error":
      return {
        ...state,
        result: "error",
      };
    default:
      return state;
  }
};

export default calcReducer;
