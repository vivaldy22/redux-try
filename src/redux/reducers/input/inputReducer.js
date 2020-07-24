const initialState = {
  user: {
    name: "",
    // age: 0,
    // address: "",
  },
};

const input = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: {
          name: action.inputName,
          // age: action.inputAge,
          // address: action.inputAddrress,
        },
      };
    default:
      return state;
  }
};

export default input;
