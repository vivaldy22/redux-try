import { combineReducers } from "redux";
import inputReducer from "./input";
import calcReducer from "./calc";

const rootReducer = combineReducers({
  rInput: inputReducer,
  rCalc: calcReducer,
});

export default rootReducer;
